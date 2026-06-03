"use client";

import { motion } from "motion/react";
import { Section } from "./ui/Section";
import { problem } from "@/lib/content";
import { stagger, staggerItem, viewportOnce } from "@/lib/motion";

export function Problem() {
  return (
    <Section noReveal>
      <p className="eyebrow">{problem.eyebrow}</p>
      <h2 className="mt-4 max-w-2xl font-display">{problem.heading}</h2>

      <motion.ul
        className="
          mt-12 md:mt-14 grid gap-px
          md:grid-cols-3 bg-[var(--line)]
          border border-[var(--line)] rounded-sm overflow-hidden
        "
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={stagger}
      >
        {problem.cards.map((card, i) => (
          <motion.li
            key={card.title}
            variants={staggerItem}
            className="bg-[var(--paper)] p-7 md:p-8"
          >
            <div className="font-display text-[var(--steel)] text-[1rem] tabular-nums">
              0{i + 1}
            </div>
            <h3 className="mt-3 font-display text-[var(--ink)] text-[1.25rem] leading-snug">
              {card.title}
            </h3>
            <p className="mt-3 text-[var(--steel)] text-[1rem] leading-relaxed">
              {card.body}
            </p>
          </motion.li>
        ))}
      </motion.ul>
    </Section>
  );
}
