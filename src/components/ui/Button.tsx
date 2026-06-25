import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href: string;
  variant?: "primary" | "ghost";
  icon?: ReactNode;
  download?: boolean;
  external?: boolean;
  className?: string;
}

export function Button({
  children,
  href,
  variant = "primary",
  icon,
  download = false,
  external = false,
  className,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-medium transition duration-200 focus-visible:outline-none";

  const styles =
    variant === "primary"
      ? "bg-accent text-white shadow-[0_8px_24px_rgba(139,92,246,0.35)] hover:-translate-y-0.5 hover:bg-accent/90"
      : "border border-glass-edge bg-glass text-text-hi backdrop-blur-glass hover:-translate-y-0.5 hover:border-white/20";

  return (
    <a
      href={href}
      download={download || undefined}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer noopener" : undefined}
      className={`${base} ${styles} ${className ?? ""}`}
    >
      {icon}
      {children}
    </a>
  );
}
