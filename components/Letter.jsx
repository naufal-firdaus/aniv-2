"use client";

import { motion } from "framer-motion";
import { config } from "@/lib/config";

export default function Letter() {
  return (
    <section className="py-24 md:py-32 px-6 relative">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <p className="text-xs uppercase tracking-[0.4em] text-gold-600 mb-3">
            Surat untukmu
          </p>
          <div className="ornament max-w-xs mx-auto">
            <svg width="20" height="20" viewBox="0 0 20 20" className="text-gold-500">
              <path
                d="M10 6 C9 4, 6 4, 6 7 C6 9.5, 10 13, 10 13 C10 13, 14 9.5, 14 7 C14 4, 11 4, 10 6 Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </motion.div>

        <motion.article
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.2 }}
          className="relative bg-cream-50 px-8 md:px-16 py-14 md:py-20 border border-burgundy-600/15"
          style={{
            boxShadow: "0 1px 0 rgba(114, 47, 55, 0.06), 0 2px 30px rgba(114, 47, 55, 0.05)",
          }}
        >
          <span className="absolute top-4 left-4 w-8 h-8 border-t border-l border-gold-500/40" />
          <span className="absolute top-4 right-4 w-8 h-8 border-t border-r border-gold-500/40" />
          <span className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-gold-500/40" />
          <span className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-gold-500/40" />

          <h3 className="font-display text-3xl md:text-4xl text-burgundy-800 mb-10 text-center">
            {config.letter.salutation}
          </h3>

          <div className="space-y-6 text-burgundy-600">
            {config.letter.paragraphs.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                className={`font-serif text-lg md:text-xl leading-[1.9] ${
                  i === 0 ? "drop-cap" : ""
                }`}
              >
                {p}
              </motion.p>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-12 pt-8 border-t border-burgundy-600/10 text-right"
          >
            <p className="font-serif italic text-lg text-burgundy-600 mb-2">
              {config.letter.closing}
            </p>
            <p className="font-display text-3xl text-burgundy-800">
              {config.letter.signature}
            </p>
          </motion.div>
        </motion.article>
      </div>
    </section>
  );
}
