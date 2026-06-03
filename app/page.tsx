import { Hero } from "@/components/Hero";
import { TrustStrip } from "@/components/TrustStrip";
import { Problem } from "@/components/Problem";
import { HowItWorks } from "@/components/HowItWorks";
import { Services } from "@/components/Services";
import { Proof } from "@/components/Proof";
import { LeadForm } from "@/components/LeadForm";

export default function Page() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Problem />
      <HowItWorks />
      <Services />
      <Proof />
      <LeadForm />
    </>
  );
}
