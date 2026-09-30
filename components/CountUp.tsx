'use client';
import { useEffect, useRef, useState } from 'react';

type Props = { value: number; from?: number; prefix?: string; suffix?: string; duration?: number };

/** Counts up once when scrolled into view. Respects reduced-motion. */
export default function CountUp({ value, from = 0, prefix = '', suffix = '', duration = 1600 }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState(value);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    setN(from);
    let raf = 0;
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        io.disconnect();
        const t0 = performance.now();
        const tick = (t: number) => {
          const k = Math.min((t - t0) / duration, 1);
          setN(Math.round(from + (value - from) * (1 - Math.pow(1 - k, 3))));
          if (k < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
  }, [value, from, duration]);

  return <span ref={ref}>{prefix}{n}{suffix}</span>;
}
