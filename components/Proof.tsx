import { Section } from "./ui/Section";
import { proof } from "@/lib/content";

export function Proof() {
  return (
    <Section id="about" spacing="loose">
      <div className="text-center max-w-2xl mx-auto">
        <p className="eyebrow">{proof.eyebrow}</p>
        <h2 className="mt-4 font-display [text-wrap:balance]">{proof.h2}</h2>
        <p
          className="
            mt-7 text-[var(--ink)]/85
            text-[1.0625rem] md:text-[1.125rem]
            leading-relaxed
          "
        >
          {proof.body}
        </p>
      </div>
    </Section>
  );
}
