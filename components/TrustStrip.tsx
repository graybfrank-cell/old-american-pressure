import { trustStrip } from "@/lib/content";

export function TrustStrip() {
  return (
    <div
      className="
        border-y border-[var(--line)] bg-[var(--paper)]
      "
      aria-label="Trust signals"
    >
      <div className="container-content py-5 md:py-6">
        <ul
          className="
            flex flex-wrap items-center justify-center
            gap-x-3 md:gap-x-5 gap-y-2
            text-[0.875rem] md:text-[0.9375rem] text-[var(--steel)]
          "
        >
          {trustStrip.map((item, i) => (
            <li
              key={item}
              className="flex items-center gap-3 md:gap-5"
            >
              <span>{item}</span>
              {i < trustStrip.length - 1 && (
                <span aria-hidden="true" className="text-[var(--line)]">
                  ·
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
