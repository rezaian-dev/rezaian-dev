"use client";

import { useEffect, useRef, useState } from "react";

// 👀 True once the element enters the viewport (fires a single time) — a 1 KB stand-in for a motion library
export function useInView<T extends HTMLElement>(margin = "0px 0px -10% 0px", threshold = 0.15) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { rootMargin: margin, threshold },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [margin, threshold]);

  return { ref, inView };
}
