import { footer, site } from "@/lib/content";

export function Footer() {
  return (
    <footer className="bg-[var(--ink)] text-[var(--paper)]">
      <div className="container-content py-14 md:py-16">
        <div className="text-center md:text-left space-y-4">
          <div className="font-display text-[1.5rem] tracking-tight">
            {footer.wordmark}
          </div>
          <div className="text-[var(--paper)]/80 text-[0.9375rem]">
            <a
              href={site.phoneHref}
              className="hover:text-[var(--paper)] transition-colors tabular-nums"
            >
              {site.phoneDisplay}
            </a>
            <span aria-hidden="true" className="mx-2 text-[var(--paper)]/40">·</span>
            <a
              href={site.emailHref}
              className="hover:text-[var(--paper)] transition-colors"
            >
              {site.email}
            </a>
          </div>
          <div className="text-[var(--paper)]/55 text-[0.8125rem]">
            {footer.legal}
          </div>
        </div>
      </div>
    </footer>
  );
}
