"use client";

import { motion } from "framer-motion";
import { config } from "@/lib/config";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-rose-200/30 blur-3xl"
        />
      </div>

      <div className="relative z-10 text-center max-w-3xl">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-xs md:text-sm uppercase tracking-[0.4em] text-gold-600 mb-8"
        >
          Dua Tahun Perjalanan
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="font-display text-burgundy-800 leading-[0.9]"
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl">
            <motion.span
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.7 }}
              className="inline-block"
            >
              {config.names.one}
            </motion.span>
            <motion.span
              initial={{ scale: 0, opacity: 0, rotate: -180 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ duration: 1.5, delay: 1.2, type: "spring" }}
              className="inline-block mx-4 md:mx-8 text-gold-500 font-serif italic text-5xl md:text-7xl lg:text-8xl"
            >
              &
            </motion.span>
            <motion.span
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.7 }}
              className="inline-block"
            >
              {config.names.two}
            </motion.span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1.5, delay: 1.8 }}
          className="my-10 flex items-center justify-center gap-4"
        >
          <span className="h-px w-20 bg-gradient-to-r from-transparent to-gold-500" />
          <svg width="40" height="40" viewBox="0 0 40 40" className="text-gold-500">
            <path
              d="M20 12 C18 8, 12 8, 12 14 C12 19, 20 26, 20 26 C20 26, 28 19, 28 14 C28 8, 22 8, 20 12 Z"
              fill="currentColor"
            />
          </svg>
          <span className="h-px w-20 bg-gradient-to-l from-transparent to-gold-500" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.1 }}
          className="font-serif italic text-xl md:text-2xl text-burgundy-600 leading-relaxed mb-4"
        >
          {config.tagline}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.4 }}
          className="text-sm tracking-widest text-burgundy-400"
        >
          {config.anniversaryLabel}
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 3 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-burgundy-400"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <span className="w-px h-12 bg-gradient-to-b from-burgundy-400 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
