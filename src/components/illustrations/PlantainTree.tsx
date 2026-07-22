export function PlantainTree({ className }: { className?: string }) {
  const leaves = [
    { angle: -165, length: 122, rx: 60, ry: 16, fill: "fill-primary-300" },
    { angle: -135, length: 132, rx: 65, ry: 18, fill: "fill-primary-400" },
    { angle: -105, length: 140, rx: 70, ry: 19, fill: "fill-primary-500" },
    { angle: -75, length: 140, rx: 70, ry: 19, fill: "fill-primary-500" },
    { angle: -45, length: 132, rx: 65, ry: 18, fill: "fill-primary-400" },
    { angle: -15, length: 122, rx: 60, ry: 16, fill: "fill-primary-300" },
  ];

  const fingers = [
    { angle: 65 },
    { angle: 82 },
    { angle: 99 },
    { angle: 116 },
  ];

  return (
    <svg
      viewBox="0 0 260 320"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M118 320 C 114 258 120 180 128 112 L 140 112 C 136 180 130 258 132 320 Z"
        className="fill-primary-700"
      />

      {leaves.map((leaf) => (
        <g key={leaf.angle} transform={`translate(134 110) rotate(${leaf.angle})`}>
          <ellipse
            cx={leaf.length / 2}
            cy="0"
            rx={leaf.rx}
            ry={leaf.ry}
            className={leaf.fill}
          />
          <path
            d={`M4 0 L${leaf.length - 6} 0`}
            className="stroke-primary-800"
            strokeWidth="1.5"
            opacity="0.35"
          />
        </g>
      ))}

      <path
        d="M134 150 L128 185"
        className="stroke-primary-700"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {fingers.map((finger) => (
        <g key={finger.angle} transform={`translate(128 185) rotate(${finger.angle})`}>
          <path
            d="M0 -7 C 22 -10 44 -6 56 3 C 44 9 22 11 0 7 C -3 3 -3 -3 0 -7 Z"
            className="fill-gold-500"
          />
        </g>
      ))}
    </svg>
  );
}
