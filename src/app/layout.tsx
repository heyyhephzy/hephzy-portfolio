import type { Metadata } from "next";
import { Crimson_Pro, Inter, Caveat, JetBrains_Mono, EB_Garamond } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const crimsonPro = Crimson_Pro({
  variable: "--font-crimson",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  display: "swap",
});

// Reading font for case study articles
const ebGaramond = EB_Garamond({
  variable: "--font-garamond",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hephzy - Product Designer & Illustrator",
  description:
    "Portfolio of Yahaya Hephzibah (Hephzy) — Product Designer (UI/UX) & Illustrator with a background in Mechatronics Engineering. Crafting thoughtful digital products and expressive visual worlds.",
  keywords: [
    "Hephzy",
    "Yahaya Hephzibah",
    "Product Designer",
    "UI/UX Designer",
    "Illustrator",
    "Mechatronics",
    "Nigeria",
    "Portfolio",
  ],
  authors: [{ name: "Yahaya Hephzibah", url: "https://x.com/heyhephzy" }],
  openGraph: {
    title: "Hephzy — Product Designer & Illustrator",
    description:
      "Crafting intuitive digital products with an engineer's precision and an illustrator's touch.",
    type: "website",
    url: "https://x.com/heyhephzy",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@heyhephzy",
    title: "Hephzy — Product Designer & Illustrator",
    description:
      "Crafting intuitive digital products with an engineer's precision and an illustrator's touch.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${crimsonPro.variable} ${inter.variable} ${caveat.variable} ${jetbrainsMono.variable} ${ebGaramond.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Runs before paint: hides the welcome intro for returning visitors (?intro replays it) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var k="hephzy-intro-seen";if(/[?&]intro\\b/.test(location.search)){localStorage.removeItem(k)}else if(localStorage.getItem(k)){document.documentElement.classList.add("intro-seen")}}catch(e){}`,
          }}
        />
      </head>
      <body className="min-h-screen overflow-x-clip bg-[var(--bg-main)] text-[var(--text-main)] font-sans antialiased transition-colors duration-300">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
