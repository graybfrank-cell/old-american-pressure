"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "motion/react";
import { Section } from "./ui/Section";
import { Button } from "./ui/Button";
import { leadForm, lotSizeOptions } from "@/lib/content";
import { leadSchema, type LeadInput } from "@/lib/schema";

const fieldBase =
  "w-full bg-white border border-[var(--line)] rounded-sm " +
  "px-4 h-12 text-[var(--ink)] text-[1rem] placeholder:text-[var(--steel)]/60 " +
  "focus:outline-none focus:border-[var(--ink)] transition-colors";

const labelBase =
  "block text-[0.8125rem] uppercase tracking-eyebrow font-medium text-[var(--steel)] mb-2";

export function LeadForm() {
  const [status, setStatus] = React.useState<"idle" | "submitting" | "success" | "error">(
    "idle"
  );

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
    <Section id="quote" tone="ink" noReveal>
      <div className="grid gap-12 md:gap-16 md:grid-cols-[1fr_1.1fr]">
        <div>
          <p className="eyebrow text-[var(--paper)]/60">{leadForm.eyebrow}</p>
          <h2 className="mt-4 font-display text-[var(--paper)]">
            {leadForm.heading}
          </h2>
          <p className="mt-5 max-w-md text-[var(--paper)]/70 text-[1.0625rem] leading-relaxed">
            {leadForm.sub}
          </p>
        </div>

        <div className="bg-[var(--paper)] rounded-sm p-7 md:p-9">
          <AnimatePresence mode="wait" initial={false}>
            {status === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="py-6"
                role="status"
                aria-live="polite"
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--accent)] text-white mb-5">
                  <svg
                    width="18"
                    height="18"
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
                <p className="font-display text-[1.5rem] text-[var(--ink)] leading-snug">
                  {leadForm.successMessage}
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.2 } }}
                className="space-y-5"
              >
                <div>
                  <label htmlFor="name" className={labelBase}>
                    {leadForm.fields.nameLabel}
                    <span aria-hidden="true" className="text-[var(--accent)] ml-1">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    autoComplete="name"
                    placeholder={leadForm.fields.namePlaceholder}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    className={fieldBase}
                    {...register("name")}
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-2 text-[0.8125rem] text-[var(--accent)]">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className={labelBase}>
                    {leadForm.fields.phoneLabel}
                    <span aria-hidden="true" className="text-[var(--accent)] ml-1">*</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    placeholder={leadForm.fields.phonePlaceholder}
                    aria-invalid={!!errors.phone}
                    aria-describedby={errors.phone ? "phone-error" : undefined}
                    className={fieldBase}
                    {...register("phone")}
                  />
                  {errors.phone && (
                    <p id="phone-error" className="mt-2 text-[0.8125rem] text-[var(--accent)]">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="dealership" className={labelBase}>
                    {leadForm.fields.dealershipLabel}
                  </label>
                  <input
                    id="dealership"
                    type="text"
                    autoComplete="organization"
                    placeholder={leadForm.fields.dealershipPlaceholder}
                    className={fieldBase}
                    {...register("dealership")}
                  />
                </div>

                <div>
                  <label htmlFor="lotSize" className={labelBase}>
                    {leadForm.fields.lotSizeLabel}
                  </label>
                  <select
                    id="lotSize"
                    aria-label={leadForm.fields.lotSizeLabel}
                    className={fieldBase + " appearance-none pr-10 bg-[length:14px] bg-[right_1rem_center] bg-no-repeat"}
                    style={{
                      backgroundImage:
                        "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='%235C6B7A' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='6 9 12 15 18 9'/></svg>\")",
                    }}
                    defaultValue=""
                    {...register("lotSize")}
                  >
                    <option value="">{leadForm.fields.lotSizePlaceholder}</option>
                    {lotSizeOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="pt-2">
                  <Button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full sm:w-auto"
                  >
                    {status === "submitting" ? "Sending…" : leadForm.submitLabel}
                  </Button>
                </div>

                {status === "error" && (
                  <p role="alert" className="text-[0.875rem] text-[var(--accent)]">
                    {leadForm.errorMessage}
                  </p>
                )}
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </Section>
  );
}
