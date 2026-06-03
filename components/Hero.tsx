"use client";

import { motion } from "motion/react";
import { hero } from "@/lib/content";
import { Button } from "./ui/Button";

const ease = [0.22, 1, 0.36, 1] as const;

const item = {
  hidden: { opacity: 0, y: 14 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease, delay: 0.08 * i },
  }),
};

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="bg-[var(--paper)] pt-10 md:pt-16 pb-20 md:pb-28"
    >
      <div className="container-content">
        <div className="max-w-3xl">
          <motion.p
            className="eyebrow"
            initial="hidden"
            animate="show"
            custom={0}
            variants={item}
          >
            {hero.eyebrow}
          </motion.p>

          <motion.h1
            id="hero-heading"
            className="mt-5 font-display text-[var(--ink)]"
            initial="hidden"
            animate="show"
            custom={1}
            variants={item}
          >
            {hero.h1}
          </motion.h1>

          <motion.p
            className="mt-6 max-w-2xl text-[1.125rem] md:text-[1.1875rem] text-[var(--steel)] leading-relaxed"
            initial="hidden"
            animate="show"
            custom={2}
            variants={item}
          >
            {hero.subhead}
          </motion.p>

          <motion.div
            className="mt-9 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5"
            initial="hidden"
            animate="show"
            custom={3}
            variants={item}
          >
            <Button href={hero.primaryCtaHref}>{hero.primaryCtaLabel}</Button>
            <a
              href={hero.secondaryCtaHref}
              className="
                text-[var(--ink)] hover:text-[var(--accent)] transition-colors
                text-[0.9375rem] underline-offset-4 hover:underline tabular-nums
              "
            >
              {hero.secondaryCtaLabel}
            </a>
          </motion.div>
        </div>

        {/* Visual placeholder — solid --ink 16:9 block. PLACEHOLDER_HERO_VISUAL */}
        <motion.div
          className="
            mt-14 md:mt-20 w-full bg-[var(--ink)] rounded-sm
            aspect-[16/9] relative overflow-hidden
          "
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.4 }}
          role="img"
          aria-label="Hero visual placeholder"
          data-placeholder={hero.visualPlaceholder}
        >
          <span className="sr-only">{hero.visualPlaceholder}</span>
        </motion.div>
      </div>
    </section>
  );
}
