import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/** Small technology label. Deliberately quiet: text first, no logos. */
export function Tag({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-sm border border-border bg-surface px-2 py-1 font-mono text-[0.75rem] leading-none text-fg-muted",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function TagList({ items, label, className }: { items: readonly string[]; label: string; className?: string }) {
  return (
    <ul aria-label={label} className={cn("flex flex-wrap gap-1.5", className)}>
      {items.map((item) => (
        <li key={item}>
          <Tag>{item}</Tag>
        </li>
      ))}
    </ul>
  );
}
