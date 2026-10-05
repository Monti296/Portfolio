import { useEffect, useRef } from "react";
import "./CursorWater.css";

const MAX_RIPPLES = 30;

const CursorWater = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }

    const context = canvas.getContext("2d");
    const ripples = [];
    let animationFrame;
    let lastPoint = null;
    let lastRippleTime = 0;

    const resizeCanvas = () => {
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * pixelRatio;
      canvas.height = window.innerHeight * pixelRatio;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    };

    const addRipple = (x, y, strength = 1) => {
      ripples.push({
        x,
        y,
        age: 0,
        strength,
        spread: 0,
      });

      if (ripples.length > MAX_RIPPLES) {
        ripples.shift();
      }
    };

    const handlePointerMove = (event) => {
      const point = { x: event.clientX, y: event.clientY };
      const distance = lastPoint
        ? Math.hypot(point.x - lastPoint.x, point.y - lastPoint.y)
        : 0;
      const now = performance.now();

      if (distance > 7 && now - lastRippleTime > 42) {
        addRipple(point.x, point.y, Math.min(1.2, 0.65 + distance / 70));
        lastRippleTime = now;
      }

      lastPoint = point;
    };

    const draw = () => {
      context.clearRect(0, 0, window.innerWidth, window.innerHeight);

      for (let index = ripples.length - 1; index >= 0; index -= 1) {
        const ripple = ripples[index];
        ripple.age += 0.014;
        ripple.spread += 1.8;

        if (ripple.age >= 1) {
          ripples.splice(index, 1);
          continue;
        }

        const opacity = (1 - ripple.age) ** 1.7 * ripple.strength;
        const radius = ripple.spread;
        const gradient = context.createRadialGradient(
          ripple.x,
          ripple.y,
          Math.max(0, radius - 28),
          ripple.x,
          ripple.y,
          radius + 42
        );
        gradient.addColorStop(0, `rgba(255, 255, 255, ${opacity * 0.16})`);
        gradient.addColorStop(0.28, `rgba(150, 225, 255, ${opacity * 0.13})`);
        gradient.addColorStop(0.72, `rgba(52, 170, 255, ${opacity * 0.09})`);
        gradient.addColorStop(1, "rgba(52, 170, 255, 0)");
        context.fillStyle = gradient;
        context.beginPath();
        context.arc(ripple.x, ripple.y, radius + 42, 0, Math.PI * 2);
        context.fill();

        [0, 14, 28].forEach((offset, ringIndex) => {
          context.beginPath();
          context.arc(
            ripple.x,
            ripple.y,
            Math.max(1, radius - offset),
            0,
            Math.PI * 2
          );
          context.strokeStyle =
            ringIndex === 1
              ? `rgba(255, 255, 255, ${opacity * 0.72})`
              : `rgba(107, 211, 255, ${opacity * 0.58})`;
          context.lineWidth = ringIndex === 1 ? 1.6 : 1.2;
          context.stroke();
        });

        context.beginPath();
        context.arc(ripple.x, ripple.y, 3.5, 0, Math.PI * 2);
        context.fillStyle = `rgba(255, 255, 255, ${opacity * 0.8})`;
        context.shadowColor = "rgba(126, 220, 255, 0.9)";
        context.shadowBlur = 14;
        context.fill();
        context.shadowBlur = 0;
      }

      animationFrame = requestAnimationFrame(draw);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    animationFrame = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return <canvas ref={canvasRef} className="cursor-water" aria-hidden="true" />;
};

export default CursorWater;
