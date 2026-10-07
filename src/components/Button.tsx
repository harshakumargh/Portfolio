import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-accent-fg hover:bg-accent-strong shadow-[0_6px_20px_-14px_var(--accent)]",
  secondary: "border border-border-strong bg-surface text-fg hover:border-accent-line hover:bg-surface-strong",
  ghost: "text-fg-muted hover:text-fg hover:bg-surface-strong",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-3.5 text-sm gap-1.5",
  md: "h-11 px-5 text-[0.9375rem] gap-2",
};

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  variant?: Variant;
  size?: Size;
  external?: boolean;
  children: ReactNode;
};

/** Link styled as a button. External links open in a new tab safely. */
export function ButtonLink({
  href,
  variant = "secondary",
  size = "md",
  external = false,
  className,
  children,
  ...rest
}: ButtonLinkProps) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(
        "group inline-flex select-none items-center justify-center whitespace-nowrap rounded-md font-medium",
        "transition-[background-color,border-color,color,transform] duration-200 ease-out active:translate-y-px",
        variants[variant],
        sizes[size],
        className,
      )}
      {...rest}
    >
      {children}
    </a>
  );
}
