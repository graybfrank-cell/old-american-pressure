import type { Variants } from "motion/react";

// Confident, restrained easing. No bounce.
const ease = [0.22, 1, 0.36, 1] as const;

/** Single-element fade-and-rise on scroll-in. Use with `whileInView` once. */
export const reveal: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease },
  },
};

/** Container that staggers children with a ~80ms delay each. */
export const stagger: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

/** Child variant for use inside a `stagger` container. */
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease },
  },
};

export const viewportOnce = { once: true, amount: 0.2 } as const;
