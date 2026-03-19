// Lightweight spotlight card effect — inspired by react-bits.dev SpotlightCard
// No external deps needed. Drop-in wrapper that adds cursor-follow spotlight glow.
import React, { useRef, useState } from 'react';

interface SpotlightProps extends React.PropsWithChildren {
  className?: string;
  spotlightColor?: string;
  spotlightRadius?: number;
}

const Spotlight: React.FC<SpotlightProps> = ({
  children,
  className = '',
  spotlightColor = 'rgba(96, 165, 250, 0.12)',
  spotlightRadius = 350,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      onMouseMove={e => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      }}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
    >
      {/* Spotlight gradient overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-20 transition-opacity duration-500"
        style={{
          opacity,
          background: `radial-gradient(circle ${spotlightRadius}px at ${pos.x}px ${pos.y}px, ${spotlightColor}, transparent)`,
        }}
      />
      {children}
    </div>
  );
};

export default Spotlight;
