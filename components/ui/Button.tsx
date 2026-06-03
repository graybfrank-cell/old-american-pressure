import * as React from "react";
import Link from "next/link";

type Variant = "accent" | "ghost";
type Size = "md" | "sm";

type BaseProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsButton = BaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & {
    href?: undefined;
  };

type ButtonAsLink = BaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "children" | "href"> & {
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

function cx(...parts: Array<string | undefined | false>) {
  return parts.filter(Boolean).join(" ");
}

const base =
  "inline-flex items-center justify-center font-medium tracking-tight " +
  "transition-[transform,background-color,color,border-color] duration-200 ease-out " +
  "will-change-transform select-none whitespace-nowrap " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 " +
  "focus-visible:ring-[var(--accent)] focus-visible:ring-offset-[var(--paper)] " +
  "disabled:opacity-60 disabled:pointer-events-none";

const sizes: Record<Size, string> = {
  md: "h-12 px-6 text-[0.95rem] rounded-sm",
  sm: "h-10 px-4 text-[0.875rem] rounded-sm",
};

const variants: Record<Variant, string> = {
  accent:
    "bg-[var(--accent)] text-white border border-transparent " +
    "hover:-translate-y-px hover:bg-[#8E2922] active:translate-y-0",
  ghost:
    "bg-transparent text-[var(--ink)] border border-[var(--ink)]/20 " +
    "hover:-translate-y-px hover:border-[var(--ink)]/40 hover:bg-[var(--ink)]/[0.03] active:translate-y-0",
};

export function Button(props: ButtonProps) {
  const { variant = "accent", size = "md", className, children } = props;
  const classes = cx(base, sizes[size], variants[variant], className);

  if ("href" in props && props.href !== undefined) {
    const { href, variant: _v, size: _s, className: _c, children: _ch, ...rest } = props;
    const external = /^https?:|^tel:|^mailto:/.test(href);
    if (external) {
      return (
        <a href={href} className={classes} {...rest}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  const { variant: _v, size: _s, className: _c, children: _ch, ...rest } =
    props as ButtonAsButton;
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
