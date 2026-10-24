import { ArrowLeft, ArrowRight, MapPin } from "lucide-react";

// The footer scene. The desktop art is the signpost SVG (public/signpost.svg); the boards are invisible links placed over it.
// Positions are percentages of the scene, so the links line up with the art at any width.
const boards = [
  { label: "Playground", caption: "Experiments & side projects", href: "/#playground", side: "left", dark: false, top: "15.5%", left: "4%" },
  { label: "Work", caption: "Case studies", href: "/#work", side: "right", dark: true, top: "4.3%", left: "22.6%" },
  { label: "About", caption: "The person behind the work", href: "/#about", side: "right", dark: false, top: "28.1%", left: "22.8%" },
  { label: "Resume", caption: "My experience", href: "/resume", side: "left", dark: true, top: "41.5%", left: "3.8%", external: true },
  { label: "LinkedIn", caption: "Let's connect", href: "https://www.linkedin.com/in/hephzibah-yahaya-a75315256/", side: "right", dark: true, top: "53.8%", left: "22.6%", external: true },
  { label: "X", caption: "Say hi", href: "https://x.com/heyhephzy", side: "left", dark: false, top: "65.1%", left: "4%", external: true },
];

function Hotspot({ board }: { board: (typeof boards)[number] }) {
  const className = "absolute rounded-xl hover:bg-white/10 transition-colors";
  const style = { top: board.top, left: board.left, width: "17.4%", height: "12.2%" };

  if (!board.href) {
    return <span aria-label={`${board.label} (coming soon)`} aria-disabled="true" className={className} style={style} />;
  }
  return (
    <a
      href={board.href}
      aria-label={board.label}
      target={board.external ? "_blank" : undefined}
      rel={board.external ? "noopener noreferrer" : undefined}
      className={className}
      style={style}
    />
  );
}

// Phone layout: the same boards stacked down a centred pole, so the text stays readable.
function MobileBoard({ board }: { board: (typeof boards)[number] }) {
  const Arrow = board.side === "right" ? ArrowRight : ArrowLeft;
  const content = (
    <span
      className={`flex h-full w-full items-center gap-3 rounded-lg px-4 py-2.5 ${
        board.side === "left" ? "flex-row" : "flex-row-reverse text-right"
      } ${board.dark ? "bg-[#141214] text-white" : "bg-[#FFF6FA] text-[#141214]"}`}
    >
      <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-[#FF4FA3] text-[#141214]">
        <Arrow className="w-4 h-4" />
      </span>
      <span className="flex flex-col">
        <span className={`text-lg font-extrabold leading-none ${board.dark && board.label !== "LinkedIn" ? "text-[#FF4FA3]" : ""}`}>
          {board.label}
        </span>
        <span className="mt-1 text-xs font-medium opacity-80">{board.caption}</span>
      </span>
    </span>
  );
  const frame = "relative z-10 flex w-[80%] rounded-xl bg-[#141214] p-[3px] shadow-[3px_3px_0_0_rgba(0,0,0,0.35)]";

  if (!board.href) {
    return <span aria-disabled="true" className={`${frame} cursor-default`}>{content}</span>;
  }
  return (
    <a
      href={board.href}
      target={board.external ? "_blank" : undefined}
      rel={board.external ? "noopener noreferrer" : undefined}
      className={frame}
    >
      {content}
    </a>
  );
}

function MobileSignpost() {
  return (
    <div className="md:hidden flex flex-col items-center bg-[#FF8CC6] px-6 pt-10 pb-8">
      <div className="relative flex w-full flex-col items-center gap-3 pt-2">
        <div className="absolute inset-y-0 left-1/2 w-2 -translate-x-1/2 rounded-sm bg-[#141214]" />
        {boards.map((board) => (
          <MobileBoard key={board.label} board={board} />
        ))}
        <div className="relative z-10 mt-2 flex items-center gap-1.5">
          <MapPin className="w-5 h-5 text-[#141214]" fill="#FF4FA3" />
          <span className="rounded-full bg-[#141214] px-2.5 py-1 text-xs font-medium text-white">You are here</span>
        </div>
      </div>
    </div>
  );
}

export default function Signpost() {
  return (
    <>
      <MobileSignpost />

      {/* Desktop: the signpost art, with links over the boards */}
      <div className="relative hidden md:block w-full aspect-[2700/1248]">
        <img src="/signpost.svg" alt="" className="absolute inset-0 h-full w-full" />
        {boards.map((board) => (
          <Hotspot key={board.label} board={board} />
        ))}
      </div>
    </>
  );
}
