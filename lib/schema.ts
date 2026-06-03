import { z } from "zod";
import { lotSizeOptions } from "./content";

// Phone: allow common formatting (digits, spaces, parens, dashes, +).
// Require at least 10 digits.
const phoneRegex = /^[+\d\s().-]{10,}$/;

export const leadSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your name.")
    .max(80, "Name is too long."),
  phone: z
    .string()
    .trim()
    .regex(phoneRegex, "Please enter a valid phone number.")
    .refine(
      (v) => (v.match(/\d/g) ?? []).length >= 10,
      "Please enter a valid phone number."
    ),
  dealership: z
    .string()
    .trim()
    .max(120, "Dealership name is too long.")
    .optional()
    .or(z.literal("")),
  lotSize: z
    .enum(lotSizeOptions as unknown as [string, ...string[]])
    .optional()
    .or(z.literal("")),
});

export type LeadInput = z.infer<typeof leadSchema>;
