export function PepperPlant({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 260"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M100 252 C 98 200 102 150 98 100"
        className="stroke-primary-700"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        d="M99 195 C 80 184 65 168 55 148"
        className="stroke-primary-600"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M99 152 C 118 141 133 126 145 109"
        className="stroke-primary-600"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M99 118 C 85 107 75 93 68 76"
        className="stroke-primary-600"
        strokeWidth="3"
        strokeLinecap="round"
      />

      <g className="fill-primary-500">
        <ellipse cx="0" cy="0" rx="24" ry="11" transform="translate(72 222) rotate(18)" />
      </g>
      <g className="fill-primary-400">
        <ellipse cx="0" cy="0" rx="22" ry="10" transform="translate(124 214) rotate(-22)" />
      </g>
      <g className="fill-primary-500">
        <ellipse cx="0" cy="0" rx="20" ry="9" transform="translate(52 153) rotate(-38)" />
      </g>
      <g className="fill-primary-400">
        <ellipse cx="0" cy="0" rx="20" ry="9" transform="translate(150 113) rotate(32)" />
      </g>
      <g className="fill-primary-600">
        <ellipse cx="0" cy="0" rx="18" ry="8" transform="translate(84 175) rotate(12)" />
      </g>
      <g className="fill-primary-500">
        <ellipse cx="0" cy="0" rx="17" ry="8" transform="translate(116 165) rotate(-14)" />
      </g>
      <g className="fill-primary-400">
        <ellipse cx="0" cy="0" rx="16" ry="7" transform="translate(64 80) rotate(-28)" />
      </g>
      <g className="fill-primary-600">
        <ellipse cx="0" cy="0" rx="15" ry="7" transform="translate(101 92) rotate(14)" />
      </g>

      <g transform="translate(58 140)">
        <path d="M0 -20 L0 0" className="stroke-primary-700" strokeWidth="2" />
        <path
          d="M0 -2 C 9 6 9 26 3 38 C 1 42 -1 42 -3 38 C -9 26 -9 6 0 -2 Z"
          className="fill-accent-500"
        />
      </g>
      <g transform="translate(142 122) rotate(18)">
        <path d="M0 -20 L0 0" className="stroke-primary-700" strokeWidth="2" />
        <path
          d="M0 -2 C 9 6 9 26 3 38 C 1 42 -1 42 -3 38 C -9 26 -9 6 0 -2 Z"
          className="fill-gold-500"
        />
      </g>
      <g transform="translate(92 200) rotate(-8)">
        <path d="M0 -18 L0 0" className="stroke-primary-700" strokeWidth="2" />
        <path
          d="M0 -2 C 8 6 8 24 3 35 C 1 39 -1 39 -3 35 C -8 24 -8 6 0 -2 Z"
          className="fill-accent-600"
        />
      </g>
    </svg>
  );
}
