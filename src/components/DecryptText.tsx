import { useEffect, useState, useRef, useCallback } from "react";
import { useInView } from "framer-motion";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:',.<>?/~`";

interface DecryptTextProps {
  text: string;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  delay?: number;
  speed?: number;
  sequential?: boolean;
  animateOn?: "mount" | "view";
  children?: React.ReactNode;
}

export default function DecryptText({
  text,
  className,
  as: Tag = "span",
  delay = 0,
  speed = 30,
  sequential = true,
  animateOn = "mount",
}: DecryptTextProps) {
  const [display, setDisplay] = useState("");
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  const shouldStart = animateOn === "mount" ? true : inView;

  useEffect(() => {
    if (shouldStart && !started) {
      const timer = setTimeout(() => setStarted(true), delay);
      return () => clearTimeout(timer);
    }
  }, [shouldStart, delay, started]);

  const animate = useCallback(() => {
    if (!started) return;

    const len = text.length;
    let frame = 0;
    // Cap sequential frames so long text doesn't take forever
    // Short text (<20 chars): reveal char by char. Long text: reveal multiple chars per frame.
    const maxFrames = 60;
    const totalFrames = sequential ? Math.min(len * 3 + 10, maxFrames) : 20;
    const charsPerFrame = sequential ? Math.max(1, (len * 3) / totalFrames) : 1;

    const scramble = () => {
      frame++;
      let result = "";

      for (let i = 0; i < len; i++) {
        if (text[i] === " ") {
          result += " ";
          continue;
        }

        if (sequential) {
          const revealAt = i * 3 / charsPerFrame;
          if (frame > revealAt + 6) {
            result += text[i];
          } else if (frame > revealAt) {
            result += CHARS[Math.floor(Math.random() * CHARS.length)];
          } else {
            result += CHARS[Math.floor(Math.random() * CHARS.length)];
          }
        } else {
          const revealAt = totalFrames * 0.6 + Math.random() * totalFrames * 0.4;
          if (frame > revealAt) {
            result += text[i];
          } else {
            result += CHARS[Math.floor(Math.random() * CHARS.length)];
          }
        }
      }

      setDisplay(result);

      if (frame < totalFrames) {
        setTimeout(scramble, speed);
      } else {
        setDisplay(text);
      }
    };

    // Start with random chars immediately
    let initial = "";
    for (let i = 0; i < len; i++) {
      initial += text[i] === " " ? " " : CHARS[Math.floor(Math.random() * CHARS.length)];
    }
    setDisplay(initial);
    setTimeout(scramble, speed);
  }, [started, text, speed, sequential]);

  useEffect(() => {
    animate();
  }, [animate]);

  // Show nothing until animation starts
  if (!display && !started) {
    return (
      <Tag ref={ref as any} className={className} style={{ visibility: "hidden" }}>
        {text}
      </Tag>
    );
  }

  return (
    <Tag ref={ref as any} className={className}>
      {display}
    </Tag>
  );
}
