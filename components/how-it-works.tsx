"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  CubeIcon,
  BellIcon,
  BarChartIcon,
} from "@radix-ui/react-icons";

type Step = {
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  smallPreview: React.ReactNode;
  largePreview: React.ReactNode;
};

const MiniFields = () => (
  <div className="w-full h-48 rounded-xl border border-border bg-background/60 dark:bg-card/70 p-3 flex flex-col gap-2">
    <div className="h-3 w-20 rounded bg-muted" />
    <div className="h-8 rounded bg-muted/60" />
    <div className="h-8 rounded bg-muted/50" />
    <div className="h-8 rounded bg-muted/40" />
    <div className="flex gap-2 mt-2">
      <div className="h-6 w-16 rounded-full bg-primary/20 border border-primary/30 text-xs flex items-center justify-center text-primary-700 dark:text-primary-400">
        + Add
      </div>
      <div className="h-6 w-20 rounded-full bg-muted/40 text-xs flex items-center justify-center text-muted-foreground">
        Scan
      </div>
    </div>
  </div>
);

const MiniList = () => (
  <div className="w-full h-48 rounded-xl border border-border bg-background/60 dark:bg-card/70 p-3 flex flex-col gap-2">
    <div className="grid grid-cols-3 gap-2 flex-1">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="h-full rounded-md bg-muted/50" />
      ))}
    </div>
    <div className="flex items-center gap-2 text-xs text-muted-foreground">
      <div className="w-2 h-2 rounded-full bg-emerald-500" />
      <span>Live updates</span>
    </div>
  </div>
);

const MiniChart = () => (
  <div className="w-full h-48 rounded-xl border border-border bg-background/60 dark:bg-card/70 p-3 flex flex-col gap-2">
    <div className="flex items-end gap-1 flex-1">
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={i}
          className="w-2 rounded bg-muted/60"
          style={{ height: 6 + (i % 6) * 8 }}
        />
      ))}
    </div>
    <div className="flex items-center gap-2 text-xs text-muted-foreground">
      <div className="w-2 h-2 rounded-full bg-primary/60" />
      <span>AI powered</span>
    </div>
  </div>
);

export default function HowItWorks() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const steps: Step[] = [
    {
      title: "Add & Organize",
      subtitle: "Step 1",
      description:
        "Easily add products manually or by scanning barcodes. Categorize them by type, location, or supplier for seamless tracking.",
      icon: <CubeIcon className="w-5 h-5" />,
      smallPreview: <MiniFields />,
      largePreview: (
        <div className="w-full h-full rounded-xl border border-border bg-background/70 dark:bg-card/70 p-4 flex flex-col gap-3">
          <img 
            src="/Images/step1.webp" 
            alt="Add & Organize interface preview" 
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      ),
    },
    {
      title: "Track in Real Time",
      subtitle: "Step 2",
      description:
        "Monitor stock levels live across all locations. Get instant alerts for low stock, expiry dates, or unusual activity.",
      icon: <BellIcon className="w-5 h-5" />,
      smallPreview: <MiniList />,
      largePreview: (
        <div className="w-full h-full rounded-xl border border-border bg-background/70 dark:bg-card/70 p-4 flex flex-col gap-3">
          <img 
            src="/Images/step1.webp" 
            alt="Track in Real Time interface preview" 
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      ),
    },
    {
      title: "Forecast & Optimize",
      subtitle: "Step 3",
      description:
        "Leverage AI to predict future demand, suggest reorder quantities, and prevent both overstocking and shortages.",
      icon: <BarChartIcon className="w-5 h-5" />,
      smallPreview: <MiniChart />,
      largePreview: (
        <div className="w-full h-full rounded-xl border border-border bg-background/70 dark:bg-card/70 p-4 flex flex-col gap-3">
          <img 
            src="/Images/step1.webp" 
            alt="Forecast & Optimize interface preview" 
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      ),
    },
  ];

  return (
    <section id="how-it-works" className="max-w-screen-xl w-full mx-auto px-4 py-24 gap-5 md:px-8 flex flex-col justify-center items-center">
      <div className="flex flex-col gap-3 text-center items-center">
        <span className="text-xs uppercase tracking-wide px-3 py-1 rounded-full border border-border bg-background/70">How it works</span>
        <h2 className="text-xl font-semibold sm:text-2xl bg-gradient-to-b from-foreground to-muted-foreground text-transparent bg-clip-text">
          How Our Smart Inventory & Sales System Works
        </h2>
        <p className="mx-auto max-w-2xl text-muted-foreground text-center">
          From onboarding to optimization, we streamline every step so you can add products, track stock and sales in real time, and optimize with AI in minutes.
        </p>
      </div>

      <div
        className="mt-12 w-full flex gap-4"
        onMouseLeave={() => setActiveIndex(null)}
      >
        {steps.map((step, index) => {
          const isActive = activeIndex === index;
          return (
            <motion.div
              key={step.title}
              layout
              transition={{ 
                type: "spring", 
                duration: 0.8, 
                bounce: 0,
                stiffness: 60,
                damping: 25
              }}
              className={`relative cursor-default rounded-2xl border border-border bg-card p-4 md:p-6 flex flex-col gap-4 overflow-hidden`}
              style={{ flex: isActive ? 1.6 : 1, minHeight: isActive ? '400px' : 'auto' }}
              onMouseEnter={() => setActiveIndex(index)}
              onFocus={() => setActiveIndex(index)}
              tabIndex={0}
              aria-label={`${step.subtitle}: ${step.title}`}
            >
              <div className="flex items-center justify-between gap-3">
                <div className="inline-flex items-center gap-2">
                  <div className="w-7 h-7 rounded-md border border-border bg-background/70 dark:bg-card/70 flex items-center justify-center">
                    {step.icon}
                  </div>
                  <span className="text-sm font-medium">{step.title}</span>
                </div>
                <span className="text-xs text-muted-foreground">{step.subtitle}</span>
              </div>

              <motion.div 
                layout
                transition={{ 
                  type: "spring", 
                  duration: 0.6, 
                  bounce: 0,
                  stiffness: 80,
                  damping: 30
                }}
                className="flex-1 flex flex-col"
              >
                <motion.div
                  key={isActive ? 'expanded' : 'collapsed'}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.4,
                    ease: "easeOut"
                  }}
                  className="flex flex-col gap-3 h-full"
                >
                  {!isActive ? (
                    <>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {step.description.split('.')[0]}.
                      </p>
                      <div className="flex-1 flex items-end">
                        {step.smallPreview}
                      </div>
                    </>
                  ) : (
                    <>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                      <div className="flex-1 flex items-stretch">
                        {step.largePreview}
                      </div>
                    </>
                  )}
                </motion.div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}


