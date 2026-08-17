import React from "react";

// Recreated OlyNation four-petal flower mark with inward arrows.
export const OlyMark = ({ size = 40, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="olyGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#b9e86a" />
        <stop offset="1" stopColor="#2f9e2f" />
      </linearGradient>
    </defs>
    <g
      stroke="url(#olyGrad)"
      strokeWidth="3"
      strokeLinejoin="round"
      strokeLinecap="round"
    >
      {/* petals */}
      <path d="M32 5 L45 18 L32 31 L19 18 Z" />
      <path d="M32 33 L45 46 L32 59 L19 46 Z" />
      <path d="M5 32 L18 19 L31 32 L18 45 Z" />
      <path d="M33 32 L46 19 L59 32 L46 45 Z" />
      {/* inward arrows */}
      <path d="M32 11 V22 M28 18 L32 22 L36 18" />
      <path d="M32 53 V42 M28 46 L32 42 L36 46" />
      <path d="M11 32 H22 M18 28 L22 32 L18 36" />
      <path d="M53 32 H42 M46 28 L42 32 L46 36" />
    </g>
  </svg>
);

// Full logo: mark + wordmark
const OlyLogo = ({ size = 40, textClass = "text-white", markClass = "" }) => (
  <div className="flex items-center gap-2 select-none">
    <OlyMark size={size} className={markClass} />
    <span
      className={`font-heading font-semibold tracking-tight ${textClass}`}
      style={{ fontSize: size * 0.62 }}
    >
      OlyNation
    </span>
  </div>
);

export default OlyLogo;
