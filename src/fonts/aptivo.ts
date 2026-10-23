import localFont from "next/font/local";
import { Grandstander, Rubik } from "next/font/google";

// Aptivo's own type: Cheri for the wordmark, Grandstander for headings, Rubik for text.
export const cheri = localFont({ src: "./Cheri.ttf", variable: "--font-cheri" });
// Both are variable fonts: no `weight` needed, Tailwind's font-weight classes drive the axis
// (a fixed `weight` array breaks the Turbopack static-export build for these two fonts).
export const grandstander = Grandstander({ variable: "--font-grandstander", subsets: ["latin"] });
export const rubik = Rubik({ variable: "--font-rubik", subsets: ["latin"] });
