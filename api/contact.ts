import { Resend } from "resend";
import type { IncomingMessage, ServerResponse } from "node:http";

const resend = new Resend(process.env.RESEND_API_KEY);

const TEAM_EMAIL = process.env.TEAM_EMAIL ?? "hello@critico.live";
const FROM_ADDRESS = "CritiCo <noreply@critico.live>";

function readBody(req: IncomingMessage): Promise<string> {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => (body += chunk));
    req.on("end", () => resolve(body));
    req.on("error", reject);
  });
}

type ContactPayload = {
  name: string;
  email: string;
  message: string;
};

export default async function handler(req: IncomingMessage, res: ServerResponse) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "application/json");

  if (req.method === "OPTIONS") {
    res.writeHead(204);
    res.end();
    return;
  }

  if (req.method !== "POST") {
    res.writeHead(405);
    res.end(JSON.stringify({ error: "Method not allowed" }));
    return;
  }

  let name: string, email: string, message: string;
  try {
    const body = await readBody(req);
    ({ name, email, message } = JSON.parse(body) as ContactPayload);
    if (!name?.trim()) throw new Error("Name required");
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) throw new Error("Invalid email");
    if (!message?.trim()) throw new Error("Message required");
  } catch (err) {
    res.writeHead(400);
    res.end(JSON.stringify({ error: (err as Error).message || "Invalid request." }));
    return;
  }

  const safeName = name.trim().replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const safeMessage = message.trim().replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\n/g, "<br>");

  // Notify team
  const { error: teamError } = await resend.emails.send({
    from: FROM_ADDRESS,
    to: [TEAM_EMAIL],
    replyTo: email,
    subject: `New project inquiry from ${safeName}`,
    html: `
<!DOCTYPE html>
<html><body style="font-family:monospace;background:#0a0d14;color:#edf0f5;padding:32px;max-width:600px;margin:0 auto;">
  <h2 style="color:#60a5fa;margin:0 0 24px;">New Project Inquiry</h2>
  <table style="width:100%;border-collapse:collapse;">
    <tr><td style="padding:8px 0;color:#858b94;width:80px;">Name</td><td style="color:#ffffff;">${safeName}</td></tr>
    <tr><td style="padding:8px 0;color:#858b94;">Email</td><td><a href="mailto:${email}" style="color:#60a5fa;">${email}</a></td></tr>
  </table>
  <hr style="border:none;border-top:1px solid #1c1f26;margin:24px 0;" />
  <p style="color:#858b94;margin:0 0 8px;font-size:12px;text-transform:uppercase;letter-spacing:0.2em;">Message</p>
  <p style="color:#ffffff;line-height:1.6;margin:0;">${safeMessage}</p>
  <hr style="border:none;border-top:1px solid #1c1f26;margin:24px 0;" />
  <p style="color:#858b94;font-size:11px;margin:0;">Reply directly to this email to respond to ${safeName}.</p>
</body></html>`,
  });

  if (teamError) {
    console.error("Team notification failed:", teamError);
    res.writeHead(500);
    res.end(JSON.stringify({ error: "Failed to send your message. Please try again." }));
    return;
  }

  // Confirmation to sender
  await resend.emails.send({
    from: FROM_ADDRESS,
    to: [email],
    subject: "We got your message — CritiCo",
    html: `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#0a0d14;font-family:Inter,sans-serif;color:#edf0f5;">
  <div style="max-width:560px;margin:40px auto;padding:0 20px;">
    <img src="https://critico.live/assets/critico.svg" alt="CritiCo" style="height:32px;margin-bottom:40px;" />
    <h1 style="font-size:28px;font-weight:500;line-height:1.2;margin:0 0 16px;color:#ffffff;">
      Thanks, ${safeName}. We'll be in touch.
    </h1>
    <p style="font-size:16px;line-height:1.6;color:#858b94;margin:0 0 24px;">
      We've received your project inquiry and will get back to you within 1 business day.
      No jargon, no pressure — just a friendly conversation about what you're building.
    </p>
    <div style="background:#161920;border:1px solid #1c1f26;border-radius:12px;padding:20px;margin:0 0 32px;">
      <p style="font-size:11px;color:#858b94;text-transform:uppercase;letter-spacing:0.2em;margin:0 0 8px;">Your message</p>
      <p style="font-size:14px;color:#858b94;line-height:1.6;margin:0;">${safeMessage}</p>
    </div>
    <p style="font-size:11px;color:#858b94;margin:0;opacity:0.5;">
      Sent from critico.live — If this wasn't you, you can safely ignore this email.
    </p>
  </div>
</body>
</html>`,
  });

  res.writeHead(200);
  res.end(JSON.stringify({ success: true }));
}
