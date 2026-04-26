"use client";

import { useState } from "react";
import { config } from "@/lib/config";
import PasswordGate from "@/components/PasswordGate";
import Hero from "@/components/Hero";
import Counter from "@/components/Counter";
import Story from "@/components/Story";
import Gallery from "@/components/Gallery";
import Letter from "@/components/Letter";
import Playlist from "@/components/Playlist";
import Footer from "@/components/Footer";

export default function Home() {
  const [unlocked, setUnlocked] = useState(!config.password.enabled);

  if (!unlocked) {
    return <PasswordGate onUnlock={() => setUnlocked(true)} />;
  }

  return (
    <main className="relative">
      <Hero />
      <Counter />
      <Story />
      <Gallery />
      <Letter />
      <Playlist />
      <Footer />
    </main>
  );
}
