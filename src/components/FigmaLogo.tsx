import React from 'react';

/**
 * Official Figma logo SVG.
 * The SVG uses the exact paths and colors from Figma's brand assets.
 * It can be sized via the `className` prop (e.g. "w-6 h-6").
 */
export default function FigmaLogo({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 54 80"
      className={className}
      aria-hidden="true"
    >
      <g clipPath="url(#clip0)">
        <path d="M13.3333 80C20.6931 80 26.6667 74.0266 26.6667 66.6667V53.3333H13.3333C5.97333 53.3333 0 59.3069 0 66.6667C0 74.0266 5.97333 80 13.3333 80Z" fill="#0ACF83" />
        <path d="M0 39.9999C0 32.6399 5.97333 26.6665 13.3333 26.6665H26.6667V53.3332H13.3333C5.97333 53.3332 0 47.3598 0 39.9999Z" fill="#A259FF" />
        <path d="M0 13.3333C0 5.97333 5.97333 0 13.3333 0H26.6667V26.6667H13.3333C5.97333 26.6667 0 20.6933 0 13.3333Z" fill="#F24E1E" />
        <path d="M26.6667 0H40.0001C47.3601 0 53.3334 5.97333 53.3334 13.3333C53.3334 20.6933 47.3601 26.6667 40.0001 26.6667H26.6667V0Z" fill="#FF7262" />
        <path d="M53.3334 39.9998C53.3334 47.3598 47.3601 53.3332 40.0001 53.3332C32.6401 53.3332 26.6667 47.3598 26.6667 39.9998C26.6667 32.6398 32.6401 26.6665 40.0001 26.6665C47.3601 26.6665 53.3334 32.6398 53.3334 39.9998Z" fill="#1ABCFE" />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="53.3333" height="80" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
