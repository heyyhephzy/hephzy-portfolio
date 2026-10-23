import Image from "next/image";

// Footer navigation as a signpost. Gwen hangs from the top of the pole.
const signs = [
  { label: "Work", href: "/#work", tilt: -3 },
  { label: "Playground", href: "/#playground", tilt: 2 },
  { label: "About", href: "/#about", tilt: -2 },
  { label: "LinkedIn", href: "https://linkedin.com", tilt: 3, external: true },
];

export default function Signpost() {
  return (
    <div className="flex flex-col items-center">
      {/* Gwen, swinging from the top of the pole */}
      <div className="relative z-10 -rotate-6 rounded-2xl bg-white p-2 shadow-xl hidden sm:block">
        <Image
          src="/illustrations/gwen-swing.webp"
          alt="Spider-Gwen swinging from a web"
          width={2000}
          height={1276}
          className="w-28 sm:w-44 h-auto"
        />
      </div>

      {/* Pole, signs and base */}
      <div className="relative flex flex-col items-center gap-2 sm:gap-3 pt-2 sm:pt-3 pb-3 sm:pb-4">
        <div className="absolute inset-y-0 left-1/2 w-1.5 -translate-x-1/2 rounded-full bg-white/70" />

        {signs.map((sign, idx) => {
          const isPink = idx % 2 === 0;
          const className = `relative z-10 block w-40 sm:w-60 px-4 sm:px-5 py-2 sm:py-3 rounded-xl text-center font-serif text-base sm:text-xl font-bold shadow-[0_4px_0_0_rgba(0,0,0,0.45)] hover:translate-y-0.5 hover:shadow-[0_2px_0_0_rgba(0,0,0,0.45)] transition-all duration-150 ${
            isPink ? "bg-[#FF4FA3] text-[#1A0B17]" : "bg-white text-[#1A0B17]"
          }`;
          const style = { transform: `rotate(${sign.tilt}deg)` };

          return sign.external ? (
            <a key={sign.label} href={sign.href} target="_blank" rel="noopener noreferrer" className={className} style={style}>
              {sign.label} ↗
            </a>
          ) : (
            <a key={sign.label} href={sign.href} className={className} style={style}>
              {sign.label}
            </a>
          );
        })}

        <div className="relative z-10 mt-1 h-2 w-32 rounded-full bg-black/70" />
      </div>
    </div>
  );
}
