"use client";

import * as React from "react";
import { motion } from "motion/react";
import { reveal, viewportOnce } from "@/lib/motion";

type SectionProps = {
  id?: string;
  as?: "section" | "div" | "article";
  /** Background style: paper (default), ink (dark), or none. */
  tone?: "paper" | "ink" | "none";
  /** Vertical rhythm. */
  spacing?: "default" | "tight" | "loose";
  className?: string;
  children: React.ReactNode;
  /** Disable scroll-in reveal (e.g., for the hero which uses its own load reveal). */
  noReveal?: boolean;
};

const spacingMap = {
  tight: "py-14 md:py-20",
  default: "py-20 md:py-28",
  loose: "py-24 md:py-36",
} as const;

const toneMap = {
  paper: "bg-[var(--paper)] text-[var(--ink)]",
  ink: "bg-[var(--ink)] text-[var(--paper)]",
  none: "",
} as const;

export function Section({
  id,
  as = "section",
  tone = "paper",
  spacing = "default",
  className,
  children,
  noReveal,
}: SectionProps) {
  const Tag = as as React.ElementType;
  const classes = [toneMap[tone], spacingMap[spacing], className]
    .filter(Boolean)
    .join(" ");

  return (
    <Tag id={id} className={classes}>
      <div className="container-content">
        {noReveal ? (
          children
        ) : (
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={reveal}
          >
            {children}
          </motion.div>
        )}
      </div>
    </Tag>
  );
}
