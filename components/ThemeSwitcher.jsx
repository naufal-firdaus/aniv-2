"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const themes = [
  {
    id: "default",
    label: "Classic",
    emoji: "🤎",
    dots: ["#FAF6F1", "#722F37", "#C9A961"],
  },
  {
    id: "valentine",
    label: "Valentine",
    emoji: "❤️",
    dots: ["#FFE4EE", "#C02050", "#FF7095"],
  },
  {
    id: "anniversary",
    label: "Anniversary",
    emoji: "💜",
    dots: ["#EDE4FF", "#7B4FAF", "#C9A961"],
  },
];

export default function ThemeSwitcher() {
  const [currentTheme, setCurrentTheme] = useState("default");
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("aniv-theme") || "default";
    setCurrentTheme(saved);
    document.documentElement.setAttribute("data-theme", saved);
  }, []);

  const changeTheme = (themeId) => {
    setCurrentTheme(themeId);
    localStorage.setItem("aniv-theme", themeId);
    document.documentElement.setAttribute("data-theme", themeId);
    setIsOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    if (!isOpen) return;
    const handleClick = (e) => {
      if (!e.target.closest("[data-theme-switcher]")) setIsOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [isOpen]);

  if (!mounted) return null;

  const current = themes.find((t) => t.id === currentTheme) || themes[0];

  return (
    <div
      data-theme-switcher
      className="fixed top-4 right-4 z-50 select-none"
    >
      {/* Toggle button — shows 3 color dots */}
      <motion.button
        onClick={() => setIsOpen((v) => !v)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        title="Ganti tema"
        className="flex items-center gap-1.5 px-3 py-2 rounded-full border backdrop-blur-sm shadow-sm"
        style={{
          background: "rgba(255,255,255,0.25)",
          borderColor: "rgba(0,0,0,0.1)",
        }}
      >
        {current.dots.map((color, i) => (
          <span
            key={i}
            className="w-2.5 h-2.5 rounded-full inline-block"
            style={{ background: color, boxShadow: "0 0 0 1px rgba(0,0,0,0.08)" }}
          />
        ))}
      </motion.button>

      {/* Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: -8 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="absolute top-12 right-0 rounded-xl shadow-lg overflow-hidden min-w-[160px]"
            style={{
              background: "rgba(255,255,255,0.88)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(0,0,0,0.08)",
            }}
          >
            <p className="text-[10px] uppercase tracking-widest px-4 pt-3 pb-1.5 opacity-40 font-medium">
              Tema
            </p>
            {themes.map((theme) => {
              const isActive = currentTheme === theme.id;
              return (
                <button
                  key={theme.id}
                  onClick={() => changeTheme(theme.id)}
                  className="w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors hover:bg-black/5"
                  style={{ color: theme.dots[1] }}
                >
                  <span className="text-base leading-none">{theme.emoji}</span>
                  <span
                    className={`flex-1 text-left font-medium ${
                      isActive ? "opacity-100" : "opacity-70"
                    }`}
                  >
                    {theme.label}
                  </span>
                  {/* Color preview dots */}
                  <span className="flex gap-0.5">
                    {theme.dots.map((color, i) => (
                      <span
                        key={i}
                        className="w-2 h-2 rounded-full"
                        style={{ background: color }}
                      />
                    ))}
                  </span>
                  {isActive && (
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="currentColor"
                      className="shrink-0"
                    >
                      <path
                        d="M2 6l3 3 5-5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </button>
              );
            })}
            <div className="h-1.5" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
