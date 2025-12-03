import { useEffect, useRef } from "react";
import "./ScrollReveal.css";

interface Props {
  children: React.ReactNode;
  effect?: "fade" | "slide" | "zoom";
}

export default function ScrollReveal({ children, effect = "fade" }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.classList.add(`reveal-${effect}`); // clase inicial según efecto

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("reveal-visible");
          observer.unobserve(el); // anima solo una vez
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
  }, [effect]);

  return <div ref={ref} className="reveal">{children}</div>;
}
