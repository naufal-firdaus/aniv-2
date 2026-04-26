"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, Heart } from "lucide-react";
import { config } from "@/lib/config";

export default function PasswordGate({ onUnlock }) {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [showHint, setShowHint] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const normalized = value.toLowerCase().replace(/\s/g, "");
    const expected = config.password.answer.toLowerCase().replace(/\s/g, "");

    if (normalized === expected) {
      onUnlock();
    } else {
      setError(true);
      setTimeout(() => setError(false), 1200);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-rose-200/20 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-gold-400/10 blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 max-w-md w-full text-center"
      >
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="w-16 h-16 rounded-full border border-burgundy-600/30 flex items-center justify-center">
              <Lock className="w-5 h-5 text-burgundy-600" strokeWidth={1.5} />
            </div>
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute inset-0 rounded-full border border-gold-500/30"
            />
          </div>
        </div>

        <p className="text-xs uppercase tracking-[0.3em] text-gold-600 mb-4">
          Untukmu yang spesial
        </p>
        <h1 className="font-display text-4xl md:text-5xl text-burgundy-800 mb-6 leading-tight">
          {config.password.question}
        </h1>

        <div className="ornament my-8">
          <Heart className="w-3 h-3 fill-current" />
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <motion.input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Ketik jawabanmu..."
            animate={error ? { x: [-8, 8, -8, 8, 0] } : {}}
            transition={{ duration: 0.4 }}
            className={`w-full px-5 py-4 bg-transparent border-b-2 text-center text-burgundy-800 placeholder:text-burgundy-400/50 font-serif text-lg focus:outline-none transition-colors ${
              error ? "border-burgundy-600" : "border-burgundy-400/40 focus:border-gold-500"
            }`}
            autoFocus
          />

          <button
            type="submit"
            className="w-full py-3 px-6 bg-burgundy-600 text-cream-50 hover:bg-burgundy-800 transition-colors text-sm tracking-[0.2em] uppercase font-medium"
          >
            Buka
          </button>
        </form>

        <AnimatePresence>
          {error && (
            <motion.p
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-burgundy-600 text-sm mt-4 italic"
            >
              Coba lagi, sayang :)
            </motion.p>
          )}
        </AnimatePresence>

        {config.password.hint && (
          <button
            onClick={() => setShowHint(!showHint)}
            className="mt-6 text-xs text-burgundy-400 hover:text-burgundy-600 transition-colors underline underline-offset-4 decoration-dotted"
          >
            {showHint ? "Sembunyikan petunjuk" : "Butuh petunjuk?"}
          </button>
        )}

        <AnimatePresence>
          {showHint && (
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-3 text-sm text-burgundy-400 italic"
            >
              {config.password.hint}
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
