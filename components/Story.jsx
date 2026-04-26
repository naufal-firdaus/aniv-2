"use client";

import { motion } from "framer-motion";
import { config } from "@/lib/config";

export default function Story() {
  return (
    <section className="py-24 md:py-32 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <p className="text-xs uppercase tracking-[0.4em] text-gold-600 mb-3">
            Cerita kita
          </p>
          <h2 className="font-display text-5xl md:text-6xl text-burgundy-800 mb-6">
            Perjalanan
          </h2>
          <div className="ornament max-w-xs mx-auto">
            <span className="text-lg">❦</span>
          </div>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold-500/40 to-transparent" />

          {config.story.map((item, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.9, delay: 0.1 }}
                className={`relative mb-16 md:mb-20 ${
                  isLeft ? "md:pr-[55%]" : "md:pl-[55%]"
                } pl-12 md:pl-0`}
              >
                <motion.div
                  whileInView={{ scale: [0, 1.3, 1] }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="absolute left-4 md:left-1/2 top-2 -translate-x-1/2 w-3 h-3 rounded-full bg-burgundy-600"
                >
                  <span className="absolute inset-0 rounded-full bg-burgundy-600 animate-ping opacity-40" />
                </motion.div>

                <div className={`${isLeft ? "md:text-right" : "md:text-left"}`}>
                  <p className="text-xs uppercase tracking-[0.3em] text-gold-600 mb-2">
                    {item.date}
                  </p>
                  <h3 className="font-display text-3xl md:text-4xl text-burgundy-800 mb-3">
                    {item.title}
                  </h3>
                  <p className="font-serif text-lg text-burgundy-600 leading-relaxed italic">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
