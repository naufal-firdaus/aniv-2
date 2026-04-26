"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { config } from "@/lib/config";

function calculateDuration(startDate) {
  const now = new Date();
  const start = new Date(startDate);
  const diff = now - start;

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor(diff / (1000 * 60 * 60)),
    minutes: Math.floor(diff / (1000 * 60)),
    seconds: Math.floor(diff / 1000),
  };
}

export default function Counter() {
  const [duration, setDuration] = useState(() => calculateDuration(config.startDate));

  useEffect(() => {
    const interval = setInterval(() => {
      setDuration(calculateDuration(config.startDate));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const items = [
    { label: "Hari", value: duration.days },
    { label: "Jam", value: duration.hours },
    { label: "Menit", value: duration.minutes },
    { label: "Detik", value: duration.seconds },
  ];

  return (
    <section className="py-24 md:py-32 px-6 border-y border-burgundy-600/15 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <p className="text-xs uppercase tracking-[0.4em] text-gold-600 mb-3">
            Bersama selama
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-burgundy-800">
            Setiap detik berharga
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {items.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="text-center group"
            >
              <div className="relative pb-8 border-b border-burgundy-600/20">
                <motion.p
                  key={item.value}
                  initial={{ opacity: 0.7, y: -2 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="font-display text-5xl md:text-6xl lg:text-7xl text-burgundy-800 tabular-nums"
                >
                  {item.value.toLocaleString("id-ID")}
                </motion.p>
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-px bg-gold-500 group-hover:w-20 transition-all duration-500" />
              </div>
              <p className="mt-4 text-sm uppercase tracking-[0.3em] text-burgundy-400">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
