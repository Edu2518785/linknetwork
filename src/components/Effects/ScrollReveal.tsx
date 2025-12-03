import { useEffect, useRef } from "react";
import "./ScrollReveal.css";

interface Props {
  children: React.ReactNode;
}

export default function ScrollReveal({ children }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("reveal-visible");
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
  }, []);

  return (
    <div ref={ref} className="reveal">
      {children}
    </div>
  );
}
