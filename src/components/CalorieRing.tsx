interface CalorieRingProps {
  current: number;
  target: number;
  remaining: number;
}

export function CalorieRing({ current, target, remaining }: CalorieRingProps) {
  const radius = 70;
  const stroke = 10;
  const normalized = radius * 2 * Math.PI;
  const ratio = Math.min(current / target, 1);
  const offset = normalized * (1 - ratio);
  const color = remaining >= 0 ? '#6366F1' : '#EF4444';

  return (
    <div className="flex flex-col items-center">
      <svg width="180" height="180" viewBox="0 0 180 180">
        <circle cx="90" cy="90" r={radius} fill="none" stroke="#E5E7EB" strokeWidth={stroke} />
        <circle
          cx="90" cy="90" r={radius} fill="none" stroke={color} strokeWidth={stroke}
          strokeDasharray={normalized} strokeDashoffset={offset}
          strokeLinecap="round" transform="rotate(-90 90 90)"
          style={{ transition: 'stroke-dashoffset 0.5s' }}
        />
        <text x="90" y="82" textAnchor="middle" className="text-3xl font-bold" fill={color}>
          {Math.max(remaining, 0)}
        </text>
        <text x="90" y="108" textAnchor="middle" className="text-xs" fill="#9CA3AF">剩余 kcal</text>
      </svg>
      <div className="flex gap-4 text-sm text-gray-500 -mt-2">
        <span>已摄入 {current}</span>
        <span>目标 {target}</span>
      </div>
    </div>
  );
}
