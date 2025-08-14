"use client";

import { Button } from "@heroui/button";
import { Link } from "@heroui/link";

export default function Cta() {
  const bullets = [
    "Tailored onboarding",
    "Easily switch from legacy tools",
    "No hidden fees",
  ];

  const CheckIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="w-4 h-4 text-emerald-500"
      aria-hidden
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.786-1.787a.75.75 0 10-1.06 1.061l2.4 2.4a.75.75 0 001.144-.09l4.999-6.492z"
        clipRule="evenodd"
      />
    </svg>
  );

  return (
    <section id="cta" className="px-4 py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-light/20 dark:from-card dark:to-light/10" />

          <div className="relative z-[1] flex flex-col items-center text-center px-6 md:px-16 py-16 md:py-24 gap-6">
            <div className="w-12 h-12 rounded-2xl border border-border bg-background/70 dark:bg-card/70 shadow-sm flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" className="text-foreground/70">
                <path d="M9 3a1 1 0 112 0v6h6a1 1 0 110 2h-6v6a1 1 0 11-2 0v-6H3a1 1 0 110-2h6V3z" />
              </svg>
            </div>

            <h3 className="text-3xl md:text-5xl font-semibold tracking-tight bg-gradient-to-b from-foreground to-muted-foreground text-transparent bg-clip-text">
              Get started with InventoryOS today!
            </h3>

            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
              {bullets.map((b) => (
                <div key={b} className="inline-flex items-center gap-2">
                  <CheckIcon />
                  <span>{b}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3 mt-2">
              <Button as={Link} href="#pricing" color="primary" variant="solid">
                Book a demo
              </Button>
              <Button as={Link} href="#product" variant="flat">
                Learn more
              </Button>
            </div>
          </div>

          <div className="pointer-events-none absolute inset-x-0 -bottom-40 h-80 bg-light/20 blur-3xl dark:bg-light/10" />
        </div>
      </div>
    </section>
  );
}


