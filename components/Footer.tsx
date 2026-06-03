import { footer, site } from "@/lib/content";

export function Footer() {
  return (
    <footer className="bg-[var(--ink)] text-[var(--paper)]">
      <div className="container-content py-12 md:py-14">
        <div className="text-center md:text-left space-y-3">
          <div className="font-display text-[1.5rem] tracking-tight">
            {footer.wordmark}
          </div>
          <div className="text-[var(--paper)]/75 text-[0.9375rem]">
            <a
              href={`tel:${site.phone}`}
              className="hover:text-[var(--paper)] transition-colors tabular-nums"
            >
              {site.phoneDisplay}
            </a>
            <span aria-hidden="true" className="mx-2 text-[var(--paper)]/40">
              ·
            </span>
            <a
              href={`mailto:${site.email}`}
              className="hover:text-[var(--paper)] transition-colors"
            >
              {site.email}
            </a>
          </div>
          <div className="text-[var(--paper)]/60 text-[0.875rem]">
            {footer.tagline}
          </div>
          <div className="text-[var(--paper)]/50 text-[0.8125rem]">
            {footer.copyright}
          </div>
        </div>
      </div>
    </footer>
  );
}
