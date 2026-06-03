import Link from "next/link";
import { header, site } from "@/lib/content";
import { Button } from "./ui/Button";

export function Header() {
  const phoneHref = `tel:${site.phone}`;

  return (
    <header
      className="
        sticky top-0 z-40 w-full
        bg-[var(--paper)]/85 backdrop-blur-md
        border-b border-[var(--line)]
      "
    >
      <div className="container-content flex h-16 items-center justify-between">
        <Link
          href="/"
          className="font-display text-[1.25rem] md:text-[1.375rem] tracking-tight text-[var(--ink)]"
          aria-label={`${header.wordmark} — home`}
        >
          {header.wordmark}
        </Link>

        <nav className="flex items-center gap-3 md:gap-5">
          <a
            href={phoneHref}
            className="
              hidden sm:inline text-[0.9375rem] text-[var(--ink)]
              hover:text-[var(--accent)] transition-colors
              tabular-nums
            "
          >
            {site.phoneDisplay}
          </a>
          <a
            href={phoneHref}
            aria-label={`Call ${site.phoneDisplay}`}
            className="
              sm:hidden inline-flex h-10 w-10 items-center justify-center
              rounded-sm border border-[var(--ink)]/15 text-[var(--ink)]
              hover:bg-[var(--ink)]/[0.04]
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92Z" />
            </svg>
          </a>
          <Button href={header.ctaHref} size="sm">
            {header.ctaLabel}
          </Button>
        </nav>
      </div>
    </header>
  );
}
