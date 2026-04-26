"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Music, ChevronDown } from "lucide-react";
import { config } from "@/lib/config";

// ─── Helper: convert any song URL → embed URL + type ─────────────────────────
function getEmbed(url) {
  if (!url || url.trim() === "") return null;

  // YouTube watch:  youtube.com/watch?v=ID
  const ytWatch = url.match(/youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)/);
  if (ytWatch)
    return {
      type: "youtube",
      src: `https://www.youtube.com/embed/${ytWatch[1]}?rel=0&modestbranding=1`,
    };

  // YouTube short:  youtu.be/ID
  const ytShort = url.match(/youtu\.be\/([a-zA-Z0-9_-]+)/);
  if (ytShort)
    return {
      type: "youtube",
      src: `https://www.youtube.com/embed/${ytShort[1]}?rel=0&modestbranding=1`,
    };

  // YouTube Music:  music.youtube.com/watch?v=ID
  const ytMusic = url.match(/music\.youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)/);
  if (ytMusic)
    return {
      type: "youtube",
      src: `https://www.youtube.com/embed/${ytMusic[1]}?rel=0&modestbranding=1`,
    };

  // Spotify track:  open.spotify.com/track/ID
  const spotifyTrack = url.match(/open\.spotify\.com\/track\/([a-zA-Z0-9]+)/);
  if (spotifyTrack)
    return {
      type: "spotify",
      src: `https://open.spotify.com/embed/track/${spotifyTrack[1]}?utm_source=generator&theme=0`,
    };

  return null;
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function Playlist() {
  const [expanded, setExpanded] = useState(null);

  const hasSongs = config.songs && config.songs.length > 0;

  if (!config.spotifyEmbed && !hasSongs) return null;

  const toggle = (i) => setExpanded((prev) => (prev === i ? null : i));

  return (
    <section className="py-24 md:py-32 px-6 bg-cream-200/40 border-y border-burgundy-600/15">
      <div className="max-w-3xl mx-auto">
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="text-center mb-12"
        >
          <p className="text-xs uppercase tracking-[0.4em] text-gold-600 mb-3">
            Soundtrack kita
          </p>
          <h2 className="font-display text-5xl md:text-6xl text-burgundy-800 mb-4">
            Lagu-lagu kita
          </h2>
          <p className="font-serif italic text-lg text-burgundy-600">
            Tekan play, tutup matamu, ingat hari itu.
          </p>
        </motion.div>

        {/* ── Spotify playlist embed (full playlist) ── */}
        {config.spotifyEmbed && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-10 rounded-lg overflow-hidden border border-burgundy-600/20"
          >
            <iframe
              src={config.spotifyEmbed}
              width="100%"
              height="380"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="block"
            />
          </motion.div>
        )}

        {/* ── Song list ── */}
        {hasSongs && (
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="space-y-0"
          >
            {config.songs.map((song, i) => {
              const embed = getEmbed(song.url);
              const isOpen = expanded === i;
              const hasPlayer = !!embed;

              // Iframe height: Spotify compact = 80px, YouTube = 185px
              const iframeH = embed?.type === "spotify" ? 80 : 185;

              return (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="border-b border-burgundy-600/10"
                >
                  {/* ── Song row ── */}
                  <div
                    onClick={() => hasPlayer && toggle(i)}
                    className={`flex items-center gap-4 py-4 group ${
                      hasPlayer ? "cursor-pointer select-none" : ""
                    }`}
                  >
                    {/* Music icon */}
                    <Music
                      className="w-4 h-4 text-gold-500 shrink-0"
                      strokeWidth={1.5}
                    />

                    {/* Title + artist */}
                    <div className="flex-1 min-w-0">
                      <p className="font-serif text-lg text-burgundy-800 truncate">
                        {song.title}
                      </p>
                      <p className="font-serif text-sm italic text-burgundy-400">
                        {song.artist}
                      </p>
                    </div>

                    {/* Track number */}
                    <span className="text-xs tabular-nums text-burgundy-400 group-hover:text-gold-600 transition-colors">
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    {/* Chevron — only when a player is available */}
                    {hasPlayer && (
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="shrink-0"
                      >
                        <ChevronDown
                          className="w-4 h-4 text-burgundy-400/50 group-hover:text-gold-500 transition-colors"
                          strokeWidth={1.5}
                        />
                      </motion.div>
                    )}
                  </div>

                  {/* ── Expandable embed player ── */}
                  <AnimatePresence initial={false}>
                    {isOpen && embed && (
                      <motion.div
                        key="player"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: iframeH + 16, opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        style={{ overflow: "hidden" }}
                        className="pb-4"
                      >
                        <div className="rounded-lg overflow-hidden border border-burgundy-600/15 shadow-sm">
                          <iframe
                            src={embed.src}
                            width="100%"
                            height={iframeH}
                            frameBorder="0"
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            allowFullScreen
                            loading="lazy"
                            className="block"
                          />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.li>
              );
            })}
          </motion.ul>
        )}

        {/* ── Hint when no URLs are set yet ── */}
        {hasSongs && config.songs.every((s) => !s.url) && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-center text-xs text-burgundy-400/40 font-serif italic mt-6"
          >
            Tambahkan URL lagu di{" "}
            <span className="not-italic font-medium tracking-wide">
              lib/config.js
            </span>{" "}
            untuk mengaktifkan pemutar musik
          </motion.p>
        )}
      </div>
    </section>
  );
}
