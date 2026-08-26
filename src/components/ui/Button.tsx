import type { ComponentPropsWithoutRef, ReactNode } from "react"
import { cn } from "../../lib/cn"

type Variant = "primary" | "ghost" | "onNavy" | "outline"

const variants: Record<Variant, string> = {
  primary:
    "bg-blue text-white hover:bg-blue-bright shadow-[0_1px_2px_rgba(0,28,99,0.25)]",
  ghost: "bg-transparent text-ink hover:bg-ink/[0.06]",
  onNavy: "bg-white text-navy hover:bg-cream",
  outline:
    "bg-transparent text-ink ring-1 ring-inset ring-ink/20 hover:ring-ink/40 hover:bg-ink/[0.03]",
}

const sizes = {
  sm: "h-9 px-4 text-[0.85rem]",
  md: "h-11 px-6 text-[0.925rem]",
  lg: "h-13 px-7 text-[1rem]",
}

type ButtonProps = {
  variant?: Variant
  size?: keyof typeof sizes
  children: ReactNode
  className?: string
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium " +
  "transition-colors duration-200 ease-[var(--ease-out-soft)] " +
  "disabled:cursor-not-allowed disabled:opacity-50 whitespace-nowrap"

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: ButtonProps & ComponentPropsWithoutRef<"button">) {
  return (
    <button className={cn(base, variants[variant], sizes[size], className)} {...rest}>
      {children}
    </button>
  )
}

export function ButtonLink({
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: ButtonProps & ComponentPropsWithoutRef<"a">) {
  return (
    <a className={cn(base, variants[variant], sizes[size], className)} {...rest}>
      {children}
    </a>
  )
}
