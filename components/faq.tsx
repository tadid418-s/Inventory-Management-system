"use client";
import { Accordion, AccordionItem } from "@heroui/accordion";
import { motion } from "framer-motion";

export default function Faq() {
  const accordionItems = [
    {
      title: "What makes it a 'smart' inventory system?",
      content: (
        <div className="text-muted-foreground">
          Real-time stock visibility, AI demand forecasting, automated purchase
          orders with supplier lead times, and multichannel syncing to prevent
          overselling.
        </div>
      ),
    },
    {
      title: "Which channels and tools can I connect?",
      content: (
        <div className="text-muted-foreground">
          Shopify, Amazon, POS systems, and ERP/EDI via integrations. Use our
          APIs for custom workflows.
        </div>
      ),
    },
    {
      title: "How accurate is the forecasting?",
      content: (
        <div className="text-muted-foreground">
          Models adapt to your seasonality and lead times. Teams typically see
          20–30% fewer stockouts and 10–25% lower on-hand inventory after 60–90
          days.
        </div>
      ),
    },
    {
      title: "Do you support multiple warehouses and locations?",
      content: (
        <div className="text-muted-foreground">
          Yes. Track transfers, bin locations, and reorder points per location.
        </div>
      ),
    },
  ];

  return (
    <motion.section
      id="faq"
      initial={{ y: 20, opacity: 0 }}
      whileInView={{
        y: 0,
        opacity: 1,
      }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.5, type: "spring", bounce: 0 }}
      className="relative w-full max-w-screen-2xl mx-auto px-4 md:px-8 py-28 flex flex-col justify-center items-center"
    >
      <div className="relative w-full rounded-3xl overflow-hidden bg-card/70">
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-light/10 dark:from-card/80 dark:to-light/5" />

        <div className="relative z-[1] w-full px-6 md:px-14 py-16">
          <div className="flex flex-col gap-3 justify-center items-center text-center">
            <span className="text-xs uppercase tracking-wide px-3 py-1 rounded-full border border-border bg-background/70">FAQs</span>
            <h2 className="text-4xl font-semibold sm:text-5xl md:text-6xl tracking-tight bg-gradient-to-b from-foreground to-muted-foreground text-transparent bg-clip-text">
              Frequently Asked Questions
            </h2>
            <p className="mx-auto max-w-4xl text-base md:text-lg text-muted-foreground">
              Everything you need to know about InventoryOS and how it helps you manage inventory with confidence.
            </p>
          </div>

          <div className="mt-12 w-full max-w-4xl mx-auto">
            <Accordion
              fullWidth
              selectionMode="multiple"
              variant="splitted"
              motionProps={{
                variants: {
                  enter: {
                    y: 0,
                    opacity: 1,
                    height: "auto",
                    transition: {
                      height: {
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                        duration: 1,
                      },
                      opacity: {
                        easings: "ease",
                        duration: 1,
                      },
                    },
                  },
                  exit: {
                    y: -10,
                    opacity: 0,
                    height: 0,
                    transition: {
                      height: {
                        easings: "ease",
                        duration: 0.25,
                      },
                      opacity: {
                        easings: "ease",
                        duration: 0.3,
                      },
                    },
                  },
                },
              }}
            >
              {accordionItems.map((item, index) => (
                <AccordionItem
                  key={index}
                  aria-label={item.title}
                  title={item.title}
                  className="text-muted-foreground"
                >
                  {item.content}
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
