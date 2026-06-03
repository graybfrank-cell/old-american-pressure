"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "motion/react";
import { hero, leadForm, site } from "@/lib/content";
import { leadSchema, type LeadInput } from "@/lib/schema";

const fieldBase =
  "w-full bg-white border border-[var(--line)] rounded-sm " +
  "px-4 h-11 text-[var(--ink)] text-[0.9375rem] placeholder:text-[var(--steel)]/55 " +
  "focus:outline-none focus:border-[var(--ink)] transition-colors";

const labelBase =
  "block text-[0.75rem] uppercase tracking-eyebrow font-medium text-[var(--steel)] mb-1.5";

export function LeadForm() {
  const [status, setStatus] = React.useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LeadInput>({
    resolver: zodResolver(leadSchema),
    mode: "onBlur",
    defaultValues: { name: "", phone: "", dealership: "", lotSize: "" },
  });

  const onSubmit = async (data: LeadInput) => {
    setStatus("submitting");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = (await res.json().catch(() => ({}))) as { ok?: boolean };
      if (!res.ok || !json.ok) throw new Error("Submission failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div
      className="
        bg-white rounded-md
        shadow-[0_20px_60px_-24px_rgba(0,0,0,0.45),0_2px_6px_rgba(0,0,0,0.08)]
        ring-1 ring-black/5
        p-6 md:p-7
        md:max-w-md md:ml-auto
      "
    >
      <AnimatePresence mode="wait" initial={false}>
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="py-4"
            role="status"
            aria-live="polite"
          >
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[var(--accent)] text-white mb-4">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.25"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <p className="font-display text-[1.25rem] text-[var(--ink)] leading-snug">
              {hero.successMessage}
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            className="space-y-4"
          >
            <header className="mb-1">
              <h2 className="font-display text-[1.375rem] md:text-[1.5rem] text-[var(--ink)] leading-snug">
                {hero.formHeading}
              </h2>
              <p className="mt-1.5 text-[0.875rem] text-[var(--steel)] leading-relaxed">
                {hero.formSub}
              </p>
            </header>

            <div>
              <label htmlFor="name" className={labelBase}>
                {leadForm.fields.name.label}
                <span aria-hidden="true" className="text-[var(--accent)] ml-1">
                  *
                </span>
              </label>
              <input
                id="name"
                type="text"
                autoComplete="name"
                placeholder={leadForm.fields.name.placeholder}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
                className={fieldBase}
                {...register("name")}
              />
              {errors.name && (
                <p
                  id="name-error"
                  className="mt-1.5 text-[0.75rem] text-[var(--accent)]"
                >
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className={labelBase}>
                {leadForm.fields.phone.label}
                <span aria-hidden="true" className="text-[var(--accent)] ml-1">
                  *
                </span>
              </label>
              <input
                id="phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                placeholder={leadForm.fields.phone.placeholder}
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? "phone-error" : undefined}
                className={fieldBase}
                {...register("phone")}
              />
              {errors.phone && (
                <p
                  id="phone-error"
                  className="mt-1.5 text-[0.75rem] text-[var(--accent)]"
                >
                  {errors.phone.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="dealership" className={labelBase}>
                {leadForm.fields.dealership.label}
              </label>
              <input
                id="dealership"
                type="text"
                autoComplete="organization"
                placeholder={leadForm.fields.dealership.placeholder}
                className={fieldBase}
                {...register("dealership")}
              />
            </div>

            <div>
              <label htmlFor="lotSize" className={labelBase}>
                {leadForm.fields.lotSize.label}
              </label>
              <select
                id="lotSize"
                aria-label={leadForm.fields.lotSize.label}
                className={
                  fieldBase +
                  " appearance-none pr-10 bg-no-repeat bg-[right_1rem_center] bg-[length:14px]"
                }
                style={{
                  backgroundImage:
                    "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='%235C6B7A' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='6 9 12 15 18 9'/></svg>\")",
                }}
                defaultValue=""
                {...register("lotSize")}
              >
                {leadForm.fields.lotSize.options.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="
                mt-2 inline-flex items-center justify-center
                w-full h-12 rounded-sm
                bg-[var(--accent)] text-white font-medium
                hover:bg-[#8E2922]
                transition-colors
                disabled:opacity-60 disabled:pointer-events-none
                focus-visible:outline-none focus-visible:ring-2
                focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2
                focus-visible:ring-offset-white
              "
            >
              {status === "submitting" ? "Sending…" : hero.ctaLabel}
            </button>

            <p className="text-center text-[0.8125rem] text-[var(--steel)] pt-1">
              {hero.secondaryLabel}{" "}
              <a
                href={`tel:${site.phone}`}
                className="
                  text-[var(--ink)] hover:text-[var(--accent)]
                  underline underline-offset-4 transition-colors tabular-nums
                "
              >
                {site.phoneDisplay}
              </a>
            </p>

            {status === "error" && (
              <p role="alert" className="text-[0.8125rem] text-[var(--accent)]">
                Something went wrong. Please call {site.phoneDisplay} instead.
              </p>
            )}
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
