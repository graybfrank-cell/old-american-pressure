import { Section } from "./ui/Section";
import { Button } from "./ui/Button";
import { finalCta, site } from "@/lib/content";

export function FinalCta() {
  return (
    <Section tone="ink" spacing="loose">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="font-display text-[var(--paper)] [text-wrap:balance]">
          {finalCta.h2}
        </h2>
        <p
          className="
            mt-5 max-w-md mx-auto
            text-[var(--paper)]/75
            text-[1rem] md:text-[1.0625rem] leading-relaxed
          "
        >
          {finalCta.sub}
        </p>

        <div className="mt-9 flex flex-col items-center gap-5">
          <Button href={finalCta.ctaHref}>{finalCta.ctaLabel}</Button>
          <a
            href={`tel:${site.phone}`}
            className="
              text-[var(--paper)]/75 hover:text-[var(--paper)]
              text-[0.9375rem] underline-offset-4 hover:underline transition-colors
              tabular-nums
            "
          >
            {finalCta.phoneLabel} {site.phoneDisplay}
          </a>
        </div>
      </div>
    </Section>
  );
}
