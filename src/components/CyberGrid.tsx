import { useEffect, useRef } from "react";

interface Laser {
  axis: "h" | "v";
  line: number; // grid line index
  pos: number; // position along the line (px)
  speed: number;
  len: number;
  hue: number; // 0 = cyan, 1 = emerald
}

const CELL = 48;

/**
 * Animated cyber-grid: glowing grid lines with laser particles
 * travelling along them, plus a mouse-following radial spotlight.
 */
export const CyberGrid = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = 0;
    let height = 0;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    const lasers: Laser[] = Array.from({ length: 22 }, () => {
      const axis: "h" | "v" = Math.random() > 0.5 ? "h" : "v";
      const span = axis === "h" ? height : width;
      return {
        axis,
        line: Math.floor(Math.random() * ((axis === "h" ? height : width) / CELL)),
        pos: Math.random() * (axis === "h" ? width : height),
        speed: (Math.random() * 0.9 + 0.5) * (Math.random() > 0.5 ? 1 : -1),
        len: 60 + Math.random() * 120,
        hue: Math.random() > 0.5 ? 0 : 1,
      };
    });

    const drawGrid = () => {
      ctx.lineWidth = 1;
      ctx.strokeStyle = "hsla(174, 70%, 55%, 0.10)";
      ctx.beginPath();
      for (let x = 0; x <= width; x += CELL) {
        ctx.moveTo(x + 0.5, 0);
        ctx.lineTo(x + 0.5, height);
      }
      for (let y = 0; y <= height; y += CELL) {
        ctx.moveTo(0, y + 0.5);
        ctx.lineTo(width, y + 0.5);
      }
      ctx.stroke();
    };

    const drawLaser = (l: Laser) => {
      const color =
        l.hue === 0 ? "174, 85%, 60%" : "152, 75%, 55%";
      const along = l.axis === "h" ? width : height;
      const cross = l.line * CELL + 0.5;

      const x0 = l.axis === "h" ? l.pos : cross;
      const y0 = l.axis === "h" ? cross : l.pos;
      const x1 = l.axis === "h" ? l.pos - Math.sign(l.speed) * l.len : cross;
      const y1 = l.axis === "h" ? cross : l.pos - Math.sign(l.speed) * l.len;

      const grad = ctx.createLinearGradient(x1, y1, x0, y0);
      grad.addColorStop(0, `hsla(${color}, 0)`);
      grad.addColorStop(1, `hsla(${color}, 0.85)`);

      ctx.strokeStyle = grad;
      ctx.lineWidth = 1.6;
      ctx.shadowBlur = 12;
      ctx.shadowColor = `hsla(${color}, 0.9)`;
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x0, y0);
      ctx.stroke();
      ctx.shadowBlur = 0;

      l.pos += l.speed;
      if (l.pos > along + l.len) l.pos = -l.len;
      if (l.pos < -l.len) l.pos = along + l.len;
    };

    const frame = () => {
      ctx.clearRect(0, 0, width, height);
      drawGrid();
      for (const l of lasers) drawLaser(l);
      rafRef.current = requestAnimationFrame(frame);
    };

    if (reduced) {
      drawGrid();
    } else {
      frame();
    }

    const onResize = () => {
      resize();
      if (reduced) {
        ctx.clearRect(0, 0, width, height);
        drawGrid();
      }
    };

    const onMove = (e: MouseEvent) => {
      const el = glowRef.current;
      if (!el) return;
      const rect = canvas.getBoundingClientRect();
      el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
      el.style.setProperty("--my", `${e.clientY - rect.top}px`);
      el.style.opacity = "1";
    };

    window.addEventListener("resize", onResize);
    window.addEventListener("mousemove", onMove);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{
          maskImage:
            "radial-gradient(ellipse at 50% 45%, black 0%, transparent 78%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at 50% 45%, black 0%, transparent 78%)",
        }}
      />
      <div
        ref={glowRef}
        className="absolute inset-0 opacity-0 transition-opacity duration-500 mix-blend-screen"
        style={{
          background:
            "radial-gradient(420px circle at var(--mx, 50%) var(--my, 50%), hsl(174 90% 55% / 0.20), hsl(152 80% 50% / 0.10) 40%, transparent 70%)",
        }}
      />
    </div>
  );
};
