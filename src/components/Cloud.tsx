interface CloudProps {
  className?: string;
  width?: number;
  variant?: 0 | 1 | 2;
}

const CLOUDS = [
  // Wide, flat — classic Simpsons shape
  {
    path: 'M 30 68 C 5 68 5 40 30 40 C 22 14 56 2 78 24 C 92 6 126 6 136 24 C 155 4 186 18 180 42 C 205 40 205 68 180 68 Z',
    viewBox: '0 0 212 78',
  },
  // Tall, puffy
  {
    path: 'M 26 72 C 3 72 3 44 26 44 C 18 12 58 0 82 28 C 98 6 134 4 140 30 C 162 6 194 22 188 48 C 212 46 212 72 188 72 Z',
    viewBox: '0 0 218 82',
  },
  // Small, rounded
  {
    path: 'M 20 56 C 3 56 3 34 20 34 C 14 12 42 2 60 20 C 72 5 100 5 106 20 C 122 4 146 16 140 36 C 160 34 160 56 140 56 Z',
    viewBox: '0 0 166 66',
  },
] as const;

export function Cloud({ className = '', width = 200, variant = 0 }: CloudProps) {
  const { path, viewBox } = CLOUDS[variant];
  return (
    <svg
      viewBox={viewBox}
      width={width}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d={path}
        fill="#F0F4FF"
        stroke="#1f1307"
        strokeWidth="3.5"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      {/* Inner highlight for cartoon depth */}
      <path
        d={path}
        fill="none"
        stroke="rgba(255,255,255,0.6)"
        strokeWidth="2"
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeDasharray="0"
        transform="translate(0, 3)"
      />
    </svg>
  );
}
