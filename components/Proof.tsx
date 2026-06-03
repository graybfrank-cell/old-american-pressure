import { Section } from "./ui/Section";
import { proof } from "@/lib/content";

export function Proof() {
  return (
    <Section id="about" tone="paper">
      <div className="grid gap-12 md:gap-16 md:grid-cols-[1.1fr_1fr] md:items-start">
        <div>
          <p className="eyebrow">{proof.eyebrow}</p>
          <h2 className="mt-4 font-display">{proof.heading}</h2>
          <p className="mt-6 max-w-xl text-[var(--ink)]/85 text-[1.0625rem] leading-relaxed">
            {proof.body}
          </p>
        </div>

        <figure
          className="
            relative border-l-2 border-[var(--accent)] pl-6 md:pl-8
            md:mt-3
          "
          data-placeholder={proof.testimonial.placeholderKey}
        >
          <blockquote className="font-display text-[1.5rem] md:text-[1.75rem] leading-snug text-[var(--ink)]">
            &ldquo;{proof.testimonial.quote}&rdquo;
          </blockquote>
          <figcaption className="mt-5 text-[var(--steel)] text-[0.9375rem]">
            — {proof.testimonial.attribution}
          </figcaption>
        </figure>
      </div>
    </Section>
  );
}
