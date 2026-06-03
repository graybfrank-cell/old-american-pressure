"use client";

import { motion } from "motion/react";
import { Section } from "./ui/Section";
import { Button } from "./ui/Button";
import { howItWorks } from "@/lib/content";
import { stagger, staggerItem, viewportOnce } from "@/lib/motion";

export function HowItWorks() {
  return (
    <Section id="how" tone="ink" noReveal>
      <p className="eyebrow text-[var(--paper)]/60">{howItWorks.eyebrow}</p>
      <h2 className="mt-4 max-w-2xl font-display text-[var(--paper)]">
        {howItWorks.heading}
      </h2>

      <motion.ol
        className="mt-14 md:mt-16 grid gap-10 md:gap-12 md:grid-cols-3"
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={stagger}
      >
        {howItWorks.steps.map((step) => (
          <motion.li key={step.number} variants={staggerItem}>
            <div className="font-display text-[var(--paper)]/40 text-[2.25rem] tabular-nums leading-none">
              {step.number}
            </div>
            <div className="mt-5 h-px w-12 bg-[var(--paper)]/25" />
            <h3 className="mt-6 font-display text-[var(--paper)] text-[1.375rem]">
              {step.title}
            </h3>
            <p className="mt-3 text-[var(--paper)]/70 leading-relaxed">
              {step.body}
            </p>
          </motion.li>
        ))}
      </motion.ol>

      <div className="mt-16 md:mt-20">
        <Button href={howItWorks.ctaHref}>{howItWorks.ctaLabel}</Button>
      </div>
    </Section>
  );
}
