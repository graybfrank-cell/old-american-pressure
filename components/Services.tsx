"use client";

import { motion } from "motion/react";
import { Section } from "./ui/Section";
import { services } from "@/lib/content";
import { stagger, staggerItem, viewportOnce } from "@/lib/motion";

function CheckIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="text-[var(--accent)] shrink-0 mt-1"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export function Services() {
  return (
    <Section noReveal>
      <p className="eyebrow">{services.eyebrow}</p>
      <h2 className="mt-4 max-w-2xl font-display">{services.heading}</h2>

      <div className="mt-12 md:mt-14 grid gap-10 lg:gap-16 lg:grid-cols-[1fr_2fr]">
        {/* Included list */}
        <div>
          <h3 className="font-display text-[1.125rem] text-[var(--ink)]">
            Included
          </h3>
          <ul className="mt-5 space-y-3">
            {services.included.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-[var(--ink)]/85 leading-relaxed"
              >
                <CheckIcon />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tier cards */}
        <motion.ul
          className="grid gap-5 sm:grid-cols-1 md:grid-cols-3"
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={stagger}
        >
          {services.tiers.map((tier) => (
            <motion.li
              key={tier.name}
              variants={staggerItem}
              className={[
                "relative bg-white rounded-sm p-7 flex flex-col",
                tier.mostPopular
                  ? "border-2 border-[var(--accent)] shadow-[0_1px_0_0_rgba(19,35,58,0.04)]"
                  : "border border-[var(--line)]",
              ].join(" ")}
            >
              {tier.mostPopular && (
                <span
                  className="
                    absolute -top-3 left-7 inline-flex items-center
                    bg-[var(--accent)] text-white
                    text-[0.6875rem] font-medium uppercase tracking-eyebrow
                    px-2.5 py-1 rounded-sm
                  "
                >
                  Most popular
                </span>
              )}
              <h3 className="font-display text-[1.25rem] text-[var(--ink)]">
                {tier.name}
              </h3>
              <div className="mt-4 font-display text-[1.75rem] leading-tight text-[var(--ink)]">
                {tier.price}
              </div>
              <p className="mt-3 text-[var(--steel)] leading-relaxed text-[0.9375rem]">
                {tier.description}
              </p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </Section>
  );
}
