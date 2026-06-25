import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "ghost";

interface CommonProps {
  children: ReactNode;
  variant?: Variant;
  icon?: ReactNode;
  className?: string;
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-medium transition duration-200 focus-visible:outline-none";

function styles(variant: Variant) {
  return variant === "primary"
    ? "bg-accent text-white shadow-[0_8px_24px_rgba(139,92,246,0.35)] hover:-translate-y-0.5 hover:bg-accent/90"
    : "border border-glass-edge bg-glass text-text-hi backdrop-blur-[16px] hover:-translate-y-0.5 hover:border-accent/40";
}

interface LinkButtonProps extends CommonProps {
  href: string;
  download?: boolean;
  external?: boolean;
}

export function Button({
  children,
  href,
  variant = "primary",
  icon,
  download = false,
  external = false,
  className,
}: LinkButtonProps) {
  return (
    <a
      href={href}
      download={download || undefined}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer noopener" : undefined}
      className={`${base} ${styles(variant)} ${className ?? ""}`}
    >
      {icon}
      {children}
    </a>
  );
}

interface ActionButtonProps
  extends CommonProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {}

/** Same look, but a real <button> for in-app actions (entry doors, toggles). */
export function ActionButton({
  children,
  variant = "primary",
  icon,
  className,
  ...rest
}: ActionButtonProps) {
  return (
    <button className={`${base} ${styles(variant)} ${className ?? ""}`} {...rest}>
      {icon}
      {children}
    </button>
  );
}
