import { Bricolage_Grotesque, Plus_Jakarta_Sans } from "next/font/google";

// Cineva's own type: Bricolage Grotesque for headings, Plus Jakarta Sans for body & labels.
// Both are variable fonts: no `weight` needed, Tailwind's font-weight classes drive the axis.
export const bricolage = Bricolage_Grotesque({ variable: "--font-bricolage", subsets: ["latin"] });
export const jakarta = Plus_Jakarta_Sans({ variable: "--font-jakarta", subsets: ["latin"] });
