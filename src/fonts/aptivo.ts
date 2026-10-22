import localFont from "next/font/local";
import { Grandstander, Rubik } from "next/font/google";

// Aptivo's own type: Cheri for the wordmark, Grandstander for headings, Rubik for text.
export const cheri = localFont({ src: "./Cheri.ttf", variable: "--font-cheri" });
export const grandstander = Grandstander({ variable: "--font-grandstander", subsets: ["latin"], weight: ["700", "800", "900"] });
export const rubik = Rubik({ variable: "--font-rubik", subsets: ["latin"], weight: ["400", "500", "600"] });
