"use client";

import { motion } from "framer-motion";
import { config } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="py-20 px-6 text-center relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1 }}
        className="max-w-2xl mx-auto"
      >
        <div className="ornament max-w-xs mx-auto mb-8">
          <span className="text-xl">❦</span>
        </div>

        <p className="font-serif italic text-2xl text-burgundy-600 mb-8 leading-relaxed">
          {config.footerNote}
        </p>

        <div className="flex items-center justify-center gap-3 mb-2">
          <span className="font-display text-2xl text-burgundy-800">
            {config.names.one}
          </span>
          <svg width="16" height="16" viewBox="0 0 16 16" className="text-gold-500">
            <path
              d="M8 5 C7 3.5, 4.5 3.5, 4.5 6 C4.5 8, 8 11, 8 11 C8 11, 11.5 8, 11.5 6 C11.5 3.5, 9 3.5, 8 5 Z"
              fill="currentColor"
            />
          </svg>
          <span className="font-display text-2xl text-burgundy-800">
            {config.names.two}
          </span>
        </div>

        <p className="text-xs uppercase tracking-[0.3em] text-burgundy-400">
          {new Date().getFullYear()} · selamanya
        </p>
      </motion.div>
    </footer>
  );
}
