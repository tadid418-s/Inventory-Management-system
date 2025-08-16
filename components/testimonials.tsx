"use client";
import { motion } from "framer-motion";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "COO at UrbanThreads Retail",
      avatar: "https://i.pravatar.cc/150?img=1",
      content:
        "InventoryOS cut our stockouts by 35% in 3 months and slashed excess inventory across 4 stores. The AI reorder points just work.",
      rating: 5,
    },
    {
      name: "Marcus Rodriguez",
      role: "Head of Operations at Scale Co",
      avatar: "https://i.pravatar.cc/150?img=3",
      content:
        "Connected Shopify, Amazon, and our POS in a day. No more overselling. Replenishment is twice as fast now.",
      rating: 5,
    },
    {
      name: "Emma Thompson",
      role: "VP Supply Chain at DataFlow",
      avatar: "https://i.pravatar.cc/150?img=5",
      content:
        "Forecast accuracy improved week over week. We finally trust our numbers and plan purchases with confidence.",
      rating: 5,
    },
    {
      name: "Robert Taylor",
      role: "CTO at FinanceFlow",
      avatar: "https://i.pravatar.cc/150?img=15",
      content:
        "Role-based permissions and audit logs made compliance straightforward. Uptime has been rock solid.",
      rating: 5,
    },
    {
      name: "Maria Garcia",
      role: "Director of Operations at StreamlineOps",
      avatar: "https://i.pravatar.cc/150?img=17",
      content:
        "Support helped us model supplier lead times and minimums. Purchase orders are now on autopilot.",
      rating: 5,
    },
    {
      name: "Kevin Lee",
      role: "Founder at NextGen Solutions",
      avatar: "https://i.pravatar.cc/150?img=19",
      content:
        "Tried 5 inventory tools. This is the first that scaled with us without duct-tape spreadsheets.",
      rating: 5,
    },
    {
      name: "Sophie Anderson",
      role: "Product Lead at InnovateLab",
      avatar: "https://i.pravatar.cc/150?img=21",
      content:
        "The slow-mover report and dead-stock alerts paid for the subscription in the first month.",
      rating: 5,
    },
    {
      name: "James Wilson",
      role: "Engineering Manager at TechBridge",
      avatar: "https://i.pravatar.cc/150?img=23",
      content:
        "Onboarding took a week including data cleanup. The team held our hand through every step.",
      rating: 5,
    },
    {
      name: "Elena Petrov",
      role: "CEO at GrowthMetrics",
      avatar: "https://i.pravatar.cc/150?img=25",
      content:
        "We expanded to 8 locations without breaking our workflows. Transfers and bin tracking are super clear.",
      rating: 5,
    },
    {
      name: "Michael Chang",
      role: "Head of Product at DataDriven",
      avatar: "https://i.pravatar.cc/150?img=27",
      content:
        "Dashboards are exactly what leadership wanted: turns, aging, and replenishment priorities in one place.",
      rating: 5,
    },
  ];

  // Removed unused StarIcon

  return (
    <section id="testimonials" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-20 flex flex-col gap-3 items-center"
        >
          <span className="text-xs uppercase tracking-wide px-3 py-1 rounded-full border border-border bg-background/70">Testimonials</span>
          <h2 className="text-xl font-semibold sm:text-2xl bg-gradient-to-b from-foreground to-muted-foreground text-transparent bg-clip-text">
            Trusted by Retail, Wholesale, and DTC Teams
          </h2>
          <p className="mx-auto max-w-xl text-muted-foreground text-center">
            Join teams reducing stockouts and unlocking cash with InventoryOS.
          </p>
        </motion.div>

        <InfiniteMovingCards
          className="mt-2"
          items={testimonials.map((t) => ({
            quote: t.content,
            name: t.name,
            title: t.role,
            rating: t.rating,
          }))}
          direction="right"
          speed="slow"
          pauseOnHover
        />
      </div>
    </section>
  );
}
