import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./SectionReveal.css";

interface SectionRevealProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionReveal({ children, className }: SectionRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className={`section-reveal ${className ?? ""}`}>
      <motion.div
        className="section-scanline"
        initial={{ top: 0, opacity: 0 }}
        animate={
          inView
            ? { top: "100%", opacity: [0, 0.6, 0.6, 0] }
            : { top: 0, opacity: 0 }
        }
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      />
      {children}
    </div>
  );
}
