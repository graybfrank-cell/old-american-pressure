"use client";

import { motion } from "motion/react";
import { Section } from "./ui/Section";
import { howItWorks } from "@/lib/content";
import { stagger, staggerItem, viewportOnce } from "@/lib/motion";

export function HowItWorks() {
  return (
    <Section noReveal>
      <p className="eyebrow">{howItWorks.eyebrow}</p>
      <h2 className="mt-4 max-w-2xl font-display">{howItWorks.h2}</h2>

      <motion.ol
        className="
          mt-12 md:mt-16
          grid gap-10 md:gap-12 md:grid-cols-3
        "
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={stagger}
      >
        {howItWorks.steps.map((step, i) => (
          <motion.li key={step.title} variants={staggerItem}>
            <div className="font-display text-[var(--steel)] text-[0.875rem] tracking-eyebrow uppercase tabular-nums">
              0{i + 1}
            </div>
            <h3 className="mt-3 font-display text-[var(--ink)] text-[1.25rem] leading-snug">
              {step.title}
            </h3>
            <p className="mt-2 text-[var(--steel)] text-[0.9375rem] leading-relaxed">
              {step.body}
            </p>
          </motion.li>
        ))}
      </motion.ol>
    </Section>
  );
}
