import { Italiana, Cormorant_Garamond } from "next/font/google";
import { config } from "@/lib/config";
import "./globals.css";
import ThemeSwitcher from "@/components/ThemeSwitcher";

const italiana = Italiana({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-italiana",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata = {
  title: `${config.names.one} & ${config.names.two} — 2 Tahun`,
  description: config.tagline,
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${italiana.variable} ${cormorant.variable}`}>
      <body className="font-serif">
        <ThemeSwitcher />
        {children}
      </body>
    </html>
  );
}
