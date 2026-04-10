import { useEffect, useRef } from "react";

type LiveBackgroundVariant = "neural" | "grid" | "wave" | "flow";

interface Props {
  variant: LiveBackgroundVariant;
  className?: string;
}

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  phase: number;
}

const COLORS: Record<LiveBackgroundVariant, { particle: string; line: string; glow: string }> = {
  neural: {
    particle: "hsla(24, 95%, 58%, 0.5)",
    line: "hsla(24, 95%, 58%,",
    glow: "hsla(174, 60%, 50%,",
  },
  grid: {
    particle: "hsla(174, 60%, 50%, 0.4)",
    line: "hsla(174, 60%, 50%,",
    glow: "hsla(260, 60%, 60%,",
  },
  wave: {
    particle: "hsla(260, 60%, 60%, 0.5)",
    line: "hsla(260, 60%, 60%,",
    glow: "hsla(24, 95%, 58%,",
  },
  flow: {
    particle: "hsla(200, 70%, 50%, 0.4)",
    line: "hsla(200, 70%, 50%,",
    glow: "hsla(174, 60%, 50%,",
  },
};

export const LiveBackground = ({ variant, className = "" }: Props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();

    const w = () => canvas.offsetWidth;
    const h = () => canvas.offsetHeight;
    const colors = COLORS[variant];

    const COUNT = variant === "grid" ? 60 : variant === "wave" ? 50 : variant === "flow" ? 70 : 65;
    const CONNECT = variant === "grid" ? 180 : 140;

    const nodes: Node[] = Array.from({ length: COUNT }, () => ({
      x: Math.random() * w(),
      y: Math.random() * h(),
      vx: (Math.random() - 0.5) * (variant === "wave" ? 0.3 : 0.5),
      vy: (Math.random() - 0.5) * (variant === "wave" ? 0.3 : 0.5),
      radius: Math.random() * 1.5 + 0.8,
      phase: Math.random() * Math.PI * 2,
    }));

    let t = 0;

    const animate = () => {
      const width = w();
      const height = h();
      ctx.clearRect(0, 0, width, height);
      t += 0.01;

      for (const n of nodes) {
        if (variant === "wave") {
          n.x += n.vx + Math.sin(t + n.phase) * 0.3;
          n.y += n.vy + Math.cos(t * 0.7 + n.phase) * 0.2;
        } else if (variant === "flow") {
          n.x += n.vx + Math.sin(n.y * 0.01 + t) * 0.2;
          n.y += n.vy;
        } else {
          n.x += n.vx;
          n.y += n.vy;
        }

        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;
        n.x = Math.max(0, Math.min(width, n.x));
        n.y = Math.max(0, Math.min(height, n.y));

        const pulse = variant === "neural" ? 1 + Math.sin(t * 2 + n.phase) * 0.3 : 1;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius * pulse, 0, Math.PI * 2);
        ctx.fillStyle = colors.particle;
        ctx.fill();
      }

      // Connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECT) {
            const opacity = (1 - dist / CONNECT) * 0.25;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            if (variant === "wave") {
              const mx = (nodes[i].x + nodes[j].x) / 2;
              const my = (nodes[i].y + nodes[j].y) / 2 + Math.sin(t + i) * 10;
              ctx.quadraticCurveTo(mx, my, nodes[j].x, nodes[j].y);
            } else {
              ctx.lineTo(nodes[j].x, nodes[j].y);
            }
            ctx.strokeStyle = `${colors.line} ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animRef.current = requestAnimationFrame(animate);
    };

    animate();
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
    };
  }, [variant]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full z-[1] pointer-events-none ${className}`}
    />
  );
};

