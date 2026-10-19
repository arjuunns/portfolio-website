"use client";

import { motion, type Variants } from "motion/react";

import { ArjunMark } from "@/components/arjun-mark";
import { ArjunWordmark } from "@/components/arjun-wordmark";

const reveal: Variants = {
  hidden: { opacity: 0, y: 12, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

export function BrandMark({ className }: { className?: string }) {
  return (
    <motion.div
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.6 }}
      whileHover={{ scale: 1.08, rotate: -2 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      className="inline-flex"
    >
      <ArjunMark className={className} />
    </motion.div>
  );
}

export function BrandWordmark({ className }: { className?: string }) {
  return (
    <motion.div
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      whileHover={{ scale: 1.04 }}
      transition={{ type: "spring", stiffness: 300, damping: 18 }}
      className="inline-flex"
    >
      <ArjunWordmark className={className} />
    </motion.div>
  );
}
