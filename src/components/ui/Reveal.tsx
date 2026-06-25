import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  index?: number;
  y?: number;
  className?: string;
  as?: "div" | "li" | "section" | "span";
}

/** Cinematic reveal with depth: opacity + rise, weighty easing. Motion-aware. */
export function Reveal({ children, index = 0, y = 18, className, as = "div" }: RevealProps) {
  const reduce = useReducedMotion();
  const variants: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : y },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: reduce ? 0 : 0.7, ease: [0.22, 1, 0.36, 1], delay: reduce ? 0 : index * 0.08 },
    },
  };
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
    >
      {children}
    </MotionTag>
  );
}
