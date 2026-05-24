interface MacroBarProps {
  label: string;
  current: number;
  target: number;
  unit: string;
  color: string;
}

function MacroBar({ label, current, target, unit, color }: MacroBarProps) {
  const pct = target > 0 ? Math.min((current / target) * 100, 100) : 0;
  return (
    <div className="mb-3">
      <div className="flex justify-between text-sm mb-1">
        <span className="font-medium">{label}</span>
        <span className="text-gray-500">{current} / {target} {unit}</span>
      </div>
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <div className="h-full rounded-full transition-all duration-300" style={{ width: `${pct}%`, backgroundColor: color }} />
      </div>
    </div>
  );
}

interface MacronutrientsProps {
  protein: { current: number; target: number };
  carbs: { current: number; target: number };
  fat: { current: number; target: number };
}

export function Macronutrients({ protein, carbs, fat }: MacronutrientsProps) {
  return (
    <div className="w-full">
      <MacroBar label="蛋白质" current={protein.current} target={protein.target} unit="g" color="#EF4444" />
      <MacroBar label="碳水" current={carbs.current} target={carbs.target} unit="g" color="#F59E0B" />
      <MacroBar label="脂肪" current={fat.current} target={fat.target} unit="g" color="#3B82F6" />
    </div>
  );
}
