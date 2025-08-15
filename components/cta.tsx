"use client";

import { Button } from "@heroui/button";
import { Link } from "@heroui/link";

export default function Cta() {
  return (
    <section id="cta" className="px-4 py-10 md:py-14">
      <div className="w-full relative">
        {/* subtle outer glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute -inset-4 rounded-[28px] bg-primary/30 blur-2xl opacity-60 dark:opacity-70"
        />

        {/* full-width card with image background */}
        <div
          className="relative overflow-hidden rounded-3xl border border-border z-[1] shadow-lg"
          style={{
            backgroundImage: "url(/Images/cta.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* gradient overlay for contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/35 to-black/40" />

          {/* content aligned to page gutters like navbar/footer */}
          <div className="relative z-[1] max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
            <div className="max-w-3xl text-center mx-auto">
              <h3 className="text-3xl md:text-5xl font-semibold tracking-tight text-white">
                Ready to optimize your inventory operations?
              </h3>
              <p className="mt-4 text-sm md:text-base text-white/90">
                InventoryOS gives you real‑time stock visibility, AI demand forecasting, and automated reordering across every channel—so you never oversell or run out.
              </p>

              <div className="mt-6 flex items-center justify-center gap-3">
                <Button as={Link} href="#pricing" color="primary" variant="shadow">
                  Book a demo
                </Button>
                <Button
                  as={Link}
                  href="#product"
                  variant="flat"
                  className="bg-white/10 text-white border border-white/30 hover:bg-white/20"
                >
                  Explore features
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


