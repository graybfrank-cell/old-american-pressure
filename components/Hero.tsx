"use client";

import { motion } from "motion/react";
import { hero, trustStrip } from "@/lib/content";
import { LeadForm } from "./LeadForm";

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
      id="quote"
      aria-labelledby="hero-heading"
      className="
        relative overflow-hidden
        flex flex-col
        md:min-h-[100svh]
      "
    >
      {/* Backdrop — looping cinematic video; --ink fallback if video fails. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[var(--ink)] overflow-hidden"
      >
        
<video
          className="w-full h-full object-cover"
          src="/media/hero.mp4"
          poster="/media/hero.jpg"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        />
      </div>

      {/* Scrim — bottom-up dark gradient keeps text/form legible over any image. */}
      <div
        aria-hidden="true"
        className="
          absolute inset-0
          bg-gradient-to-t from-black/60 via-black/25 to-black/10
        "
      />

      {/* Content */}
      <div className="relative flex-1 flex flex-col">
        <div
          className="
            container-content flex-1
            grid md:grid-cols-12 gap-10 md:gap-12
            items-center
            pt-16 pb-20 md:pt-24 md:pb-24
          "
        >
          {/* Copy column */}
          <div className="md:col-span-7 text-[var(--paper)]">
            <motion.p
              className="eyebrow text-[var(--paper)]/80"
              initial="hidden"
              animate="show"
              custom={0}
              variants={item}
            >
              {hero.eyebrow}
            </motion.p>

            <motion.h1
              id="hero-heading"
              className="
                mt-5 font-display text-[var(--paper)]
                [text-wrap:balance]
              "
              initial="hidden"
              animate="show"
              custom={1}
              variants={item}
            >
              {hero.h1}
            </motion.h1>

            <motion.p
              className="
                mt-6 max-w-xl
                text-[1.0625rem] md:text-[1.1875rem]
                text-[var(--paper)]/85 leading-relaxed
              "
              initial="hidden"
              animate="show"
              custom={2}
              variants={item}
            >
              {hero.subhead}
            </motion.p>
          </div>

          {/* Form column */}
          <motion.div
            className="md:col-span-5"
            initial="hidden"
            animate="show"
            custom={3}
            variants={item}
          >
            <LeadForm />
          </motion.div>
        </div>

        {/* Trust strip — sits at the bottom of the hero. */}
        <motion.ul
          className="
            relative
            container-content
            pb-8 md:pb-10
            flex flex-wrap items-center justify-center
            gap-x-3 md:gap-x-5 gap-y-2
            text-[0.8125rem] md:text-[0.875rem]
            text-[var(--paper)]/70
          "
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease, delay: 0.55 }}
          aria-label="Trust signals"
        >
          {trustStrip.map((label, i) => (
            <li key={label} className="flex items-center gap-3 md:gap-5">
              <span>{label}</span>
              {i < trustStrip.length - 1 && (
                <span aria-hidden="true" className="text-[var(--paper)]/30">
                  ·
                </span>
              )}
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
