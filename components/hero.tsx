"use client";
/* eslint-disable @next/next/no-img-element */
import { Button } from "@heroui/button";
import { motion } from "framer-motion";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@heroui/modal";
import { useDisclosure } from "@heroui/use-disclosure";
import { Link } from "@heroui/link";

export default function Hero() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <div className="relative justify-center items-center">
      {/* Top Left Flare */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.3, type: "spring", bounce: 0 }}
        className="w-full h-full absolute -top-32 -left-32 flex justify-start items-start pointer-events-none z-0"
      >
        <div className="w-3/4 flex justify-start items-start">
          <div className="w-12 h-[600px] bg-light blur-[70px] rounded-3xl max-sm:rotate-[-15deg] sm:rotate-[-35deg] [will-change:transform]"></div>
        </div>
      </motion.div>

      {/* Top Right Flare - Moved behind dashboard */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.5, type: "spring", bounce: 0 }}
        className="w-full h-full absolute -top-32 flex justify-end items-center pointer-events-none z-0"
      >
        <div className="w-3/4 flex justify-center items-center">
          <div className="w-12 h-[600px] bg-light blur-[70px] rounded-3xl max-sm:rotate-[15deg] sm:rotate-[35deg] [will-change:transform]"></div>
        </div>
      </motion.div>

      <section id="product" className="relative max-w-screen-xl mx-auto px-4 py-0 md:py-0 gap-12 md:px-8 flex flex-col justify-center overflow-visible min-h-[calc(100dvh-64px)] mb-12 md:mb-20 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{ duration: 0.6, type: "spring", bounce: 0 }}
            className="flex flex-col justify-start md:items-start items-center space-y-5 max-w-4xl mx-auto md:mx-0 md:text-left text-center"
          >
            <span className="w-fit h-full text-sm bg-card px-2 py-1 border border-border rounded-full">
              Smart inventory, simplified
            </span>
            <h1 className="text-4xl font-medium tracking-tighter mx-auto md:mx-0 md:text-6xl text-pretty bg-gradient-to-b from-sky-800 dark:from-sky-100 to-foreground dark:to-foreground bg-clip-text text-transparent">
              Smart Inventory Management for Modern Teams
            </h1>
            <p className="max-w-2xl text-lg mx-auto md:mx-0 text-muted-foreground text-balance">
              Track stock in real time, forecast demand with AI, and automate reordering across warehouses and channels.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="items-center justify-start gap-x-3 space-y-3 sm:flex sm:space-y-0"
            >
              <Button onPress={onOpen} color="primary" variant="shadow">
                See how it works
              </Button>
              <Modal
                isOpen={isOpen}
                placement="center"
                onOpenChange={onOpenChange}
              >
                <ModalContent>
                  <ModalHeader>About InventoryOS</ModalHeader>
                  <ModalBody>
                    InventoryOS helps retailers and wholesalers eliminate stockouts and overstock with real-time visibility, AI forecasting, and automated workflows.
                  </ModalBody>
                  <ModalFooter>
                    <Button as={Link} href="#pricing" color="primary" variant="solid" size="sm">
                      Book a demo
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring", bounce: 0 }}
            className="relative w-full md:-mr-10 lg:-mr-20 xl:-mr-28 2xl:-mr-36 overflow-visible mt-0 md:mt-16 lg:mt-24 xl:mt-28 2xl:mt-32"
          >
            <div className="relative rounded-2xl border border-border bg-card/50 shadow-lg overflow-hidden md:scale-110 lg:scale-115 xl:scale-125 2xl:scale-130 origin-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-transparent pointer-events-none" />
              <img
                src="/Images/dashboard.webp"
                alt="InventoryOS dashboard preview"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
