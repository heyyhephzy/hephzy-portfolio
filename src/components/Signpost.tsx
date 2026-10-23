import Image from "next/image";
import { ArrowLeft, ArrowRight, MapPin } from "lucide-react";

// The footer scene: a street signpost on the left. Positions are percentages of the scene, so it scales with the footer.
const boards = [
  { label: "Playground", caption: "Experiments & side projects", href: "/#playground", side: "left", dark: false, top: "48.2%", left: "4.1%" },
  { label: "Work", caption: "Case studies", href: "/#work", side: "right", dark: true, top: "45.5%", left: "22.7%" },
  { label: "About", caption: "The person behind the work", href: "/#about", side: "right", dark: false, top: "59%", left: "22.9%" },
  { label: "Resume", caption: "My experience", href: null, side: "left", dark: true, top: "68.3%", left: "3.9%" },
  { label: "LinkedIn", caption: "Let's connect", href: "https://linkedin.com", side: "right", dark: true, top: "76.7%", left: "22.7%", external: true },
  { label: "X", caption: "Say hi", href: "https://x.com/heyhephzy", side: "left", dark: false, top: "84.5%", left: "4.1%", external: true },
];

function Cloud({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 84 34" className={`absolute ${className ?? ""}`} style={style} aria-hidden>
      <path
        d="M14 30 C4 30 3 20 11 18 C10 8 22 4 29 10 C33 2 47 2 51 11 C58 8 68 13 66 22 C75 22 78 30 70 30 Z"
        fill="#FFFFFF"
        stroke="#141214"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Board({ board }: { board: (typeof boards)[number] }) {
  const Arrow = board.side === "right" ? ArrowRight : ArrowLeft;
  const inner = (
    <span
      className={`flex h-full w-full items-center gap-2 rounded-lg px-2.5 sm:px-3 ${
        board.side === "left" ? "flex-row" : "flex-row-reverse"
      } ${board.dark ? "bg-[#141214] text-white" : "bg-[#FFF6FA] text-[#141214]"}`}
    >
      <span className="flex h-6 w-6 sm:h-7 sm:w-7 flex-shrink-0 items-center justify-center rounded-full bg-[#FF4FA3] text-[#141214]">
        <Arrow className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
      </span>
      <span className={`flex min-w-0 flex-col ${board.side === "left" ? "items-start text-left" : "items-end text-right"}`}>
        <span className={`font-sans font-extrabold leading-none text-sm sm:text-[22px] ${board.dark && board.label !== "LinkedIn" ? "text-[#FF4FA3]" : ""}`}>
          {board.label}
        </span>
        <span className="mt-0.5 text-[9px] sm:text-xs font-medium leading-tight opacity-80">
          {board.caption}
        </span>
      </span>
    </span>
  );

  const frame = `absolute flex rounded-xl bg-[#141214] p-[3px] shadow-[3px_3px_0_0_rgba(0,0,0,0.35)] transition-transform duration-150`;
  const style = { top: board.top, left: board.left, width: "17.2%", height: "7.8%" };

  if (!board.href) {
    return (
      <span aria-disabled="true" className={`${frame} cursor-default`} style={style}>
        {inner}
      </span>
    );
  }

  return (
    <a
      href={board.href}
      target={board.external ? "_blank" : undefined}
      rel={board.external ? "noopener noreferrer" : undefined}
      className={`${frame} hover:-translate-y-0.5`}
      style={style}
    >
      {inner}
    </a>
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
      <Image
        src="/illustrations/gwen-swing.png"
        alt="Spider-Gwen swinging from a web"
        width={461}
        height={426}
        className="w-48 h-auto"
      />
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
    <div className="relative hidden md:block w-full aspect-[1140/773] bg-[#FF8CC6]">
      {/* Pole */}
      <div className="absolute top-[39%] bottom-0 w-[10px] rounded-sm bg-[#141214]" style={{ left: "calc(21.9% - 5px)" }} />

      {/* Gwen, swinging from the pole */}
      <Image
        src="/illustrations/gwen-swing.png"
        alt="Spider-Gwen swinging from a web"
        width={461}
        height={426}
        priority
        className="absolute h-auto"
        style={{ top: "15.5%", left: "7.5%", width: "25%" }}
      />

      {/* Separate web on the floor */}
      <Image
        src="/illustrations/web-floor.png"
        alt=""
        priority
        width={155}
        height={150}
        className="absolute h-auto"
        style={{ top: "77%", left: "89%", width: "7%" }}
      />

      {/* Clouds */}
      <Cloud style={{ top: "63%", left: "3.9%", width: "7.5%" }} />
      <Cloud style={{ top: "73.5%", left: "34.4%", width: "6%" }} />

      {boards.map((board) => (
        <Board key={board.label} board={board} />
      ))}

      {/* You are here */}
      <div className="absolute flex items-end gap-1.5" style={{ top: "91%", left: "24%" }}>
        <MapPin className="w-5 h-5 text-[#141214]" fill="#FF4FA3" />
        <span className="rounded-full bg-[#141214] px-2.5 py-1 text-[10px] sm:text-xs font-medium text-white -translate-y-1">
          You are here
        </span>
      </div>
    </div>
    </>
  );
}
