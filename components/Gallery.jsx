"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Camera } from "lucide-react";
import { config } from "@/lib/config";

export default function Gallery() {
  const [imgErrors, setImgErrors] = useState({});

  return (
    <section className="py-24 md:py-32 px-6 bg-cream-200/40 border-y border-burgundy-600/15">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <p className="text-xs uppercase tracking-[0.4em] text-gold-600 mb-3">
            Album kenangan
          </p>
          <h2 className="font-display text-5xl md:text-6xl text-burgundy-800 mb-6">
            Frame favorit
          </h2>
          <p className="font-serif italic text-lg text-burgundy-600 max-w-xl mx-auto">
            Beberapa momen yang ingin selalu kuingat — dan masih banyak lagi
            yang akan kita kumpulkan.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[180px] md:auto-rows-[220px]">
          {config.gallery.map((photo, i) => {
            const layouts = [
              "col-span-2 row-span-2",
              "col-span-1 row-span-1",
              "col-span-1 row-span-2",
              "col-span-1 row-span-1",
              "col-span-2 row-span-1",
              "col-span-1 row-span-1",
            ];
            const layoutClass = layouts[i % layouts.length];
            const hasError = imgErrors[i];

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: i * 0.08 }}
                className={`gallery-item relative overflow-hidden rounded-sm bg-burgundy-800/10 ${layoutClass}`}
              >
                {!hasError ? (
                  <Image
                    src={photo.src}
                    alt={photo.caption}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover"
                    onError={() =>
                      setImgErrors((prev) => ({ ...prev, [i]: true }))
                    }
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-4">
                    <div className="relative flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full border border-burgundy-600/15 flex items-center justify-center">
                        <Camera
                          className="w-4 h-4 text-burgundy-400/30"
                          strokeWidth={1.5}
                        />
                      </div>
                      <motion.div
                        animate={{
                          scale: [1, 1.15, 1],
                          opacity: [0.2, 0.4, 0.2],
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="absolute inset-0 rounded-full border border-gold-500/20"
                      />
                    </div>
                    <p className="text-burgundy-400/35 text-xs text-center font-serif italic leading-relaxed max-w-[90%]">
                      {photo.caption}
                    </p>
                    <span className="text-[10px] uppercase tracking-widest text-burgundy-400/20">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                )}

                {!hasError && (
                  <p className="caption font-serif text-base">
                    {photo.caption}
                  </p>
                )}
              </motion.div>
            );
          })}
        </div>

        {Object.keys(imgErrors).length > 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center text-xs text-burgundy-400/40 font-serif italic mt-8"
          >
            Taruh foto di folder{" "}
            <span className="not-italic font-medium tracking-wide">
              public/assets/
            </span>{" "}
            untuk menampilkan galeri
          </motion.p>
        )}
      </div>
    </section>
  );
}
