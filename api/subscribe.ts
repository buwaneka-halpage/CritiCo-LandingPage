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

  let email: string;
  try {
    const body = await readBody(req);
    ({ email } = JSON.parse(body) as { email: string });
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) throw new Error("Invalid email");
  } catch {
    res.writeHead(400);
    res.end(JSON.stringify({ error: "A valid email address is required." }));
    return;
  }

  // Send welcome email to subscriber
  const { error: welcomeError } = await resend.emails.send({
    from: FROM_ADDRESS,
    to: [email],
    subject: "You're on the list — CritiCo",
    html: `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#0a0d14;font-family:Inter,sans-serif;color:#edf0f5;">
  <div style="max-width:560px;margin:40px auto;padding:0 20px;">
    <img src="https://critico.live/assets/critico.svg" alt="CritiCo" style="height:32px;margin-bottom:40px;" />
    <h1 style="font-size:28px;font-weight:500;line-height:1.2;margin:0 0 16px;color:#ffffff;">
      You're in. Welcome to the edge.
    </h1>
    <p style="font-size:16px;line-height:1.6;color:#858b94;margin:0 0 32px;">
      You'll be among the first to hear about our insights on bespoke software, AI engineering, and the trends shaping high-growth companies.
    </p>
    <p style="font-size:14px;color:#858b94;margin:0 0 8px;">Got a project in mind right now?</p>
    <a href="https://critico.live/#ready-to-start"
       style="display:inline-block;padding:12px 24px;background:linear-gradient(90deg,#60a5fa,#a855f7 50%,#ec4899);border-radius:8px;color:#ffffff;text-decoration:none;font-size:13px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;font-family:monospace;">
      Start a Project →
    </a>
    <p style="font-size:11px;color:#858b94;margin:40px 0 0;opacity:0.5;">
      You received this because you subscribed at critico.live.
      No spam, ever.
    </p>
  </div>
</body>
</html>`,
  });

  if (welcomeError) {
    console.error("Welcome email failed:", welcomeError);
    res.writeHead(500);
    res.end(JSON.stringify({ error: "Failed to send confirmation email." }));
    return;
  }

  // Notify team
  await resend.emails.send({
    from: FROM_ADDRESS,
    to: [TEAM_EMAIL],
    subject: `New subscriber: ${email}`,
    html: `<p style="font-family:monospace;">New newsletter subscriber: <strong>${email}</strong></p>`,
  });

  res.writeHead(200);
  res.end(JSON.stringify({ success: true }));
}
