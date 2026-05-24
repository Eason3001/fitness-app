import { useState } from 'react';
import type { Profile } from '../types';
import { ACTIVITY_LABELS } from '../types';
import { useAppData } from '../hooks/useAppData';

export function ProfilePage() {
  const { data, updateProfile } = useAppData();
  const [gender, setGender] = useState<'male' | 'female'>(data.profile?.gender ?? 'male');
  const [age, setAge] = useState(data.profile?.age?.toString() ?? '');
  const [height, setHeight] = useState(data.profile?.height?.toString() ?? '');
  const [weight, setWeight] = useState(data.profile?.weight?.toString() ?? '');
  const [goal, setGoal] = useState<'lose' | 'gain'>(data.profile?.goal ?? 'lose');
  const [activityLevel, setActivityLevel] = useState<number>(data.profile?.activityLevel ?? 1.45);

  const handleSave = () => {
    const a = Number(age), h = Number(height), w = Number(weight);
    if (!a || !h || !w) return;
    updateProfile({ gender, age: a, height: h, weight: w, goal, activityLevel: activityLevel as Profile['activityLevel'] });
  };

  const allFilled = age && height && weight;

  return (
    <div className="p-4 pb-24 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">我的数据</h1>

      <label className="block text-sm font-medium text-gray-600 mb-1">性别</label>
      <div className="flex gap-2 mb-4">
        {(['male', 'female'] as const).map(g => (
          <button key={g} onClick={() => setGender(g)}
            className={`flex-1 py-2.5 rounded-lg text-sm font-medium ${gender === g ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-600'}`}>
            {g === 'male' ? '男' : '女'}
          </button>
        ))}
      </div>

      <label className="block text-sm font-medium text-gray-600 mb-1">年龄</label>
      <input type="number" inputMode="numeric" value={age} onChange={e => setAge(e.target.value)}
        placeholder="输入年龄" className="w-full p-2.5 border border-gray-200 rounded-lg mb-4 text-sm focus:outline-none focus:border-indigo-400" />

      <label className="block text-sm font-medium text-gray-600 mb-1">身高 (cm)</label>
      <input type="number" inputMode="decimal" value={height} onChange={e => setHeight(e.target.value)}
        placeholder="如 175" className="w-full p-2.5 border border-gray-200 rounded-lg mb-4 text-sm focus:outline-none focus:border-indigo-400" />

      <label className="block text-sm font-medium text-gray-600 mb-1">体重 (kg)</label>
      <input type="number" inputMode="decimal" value={weight} onChange={e => setWeight(e.target.value)}
        placeholder="如 70" className="w-full p-2.5 border border-gray-200 rounded-lg mb-4 text-sm focus:outline-none focus:border-indigo-400" />

      <label className="block text-sm font-medium text-gray-600 mb-1">目标</label>
      <div className="flex gap-2 mb-4">
        {[{ key: 'lose' as const, label: '减脂' }, { key: 'gain' as const, label: '增肌' }].map(g => (
          <button key={g.key} onClick={() => setGoal(g.key)}
            className={`flex-1 py-2.5 rounded-lg text-sm font-medium ${goal === g.key ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-600'}`}>
            {g.label}
          </button>
        ))}
      </div>

      <label className="block text-sm font-medium text-gray-600 mb-1">活动水平</label>
      <select value={activityLevel} onChange={e => setActivityLevel(Number(e.target.value))}
        className="w-full p-2.5 border border-gray-200 rounded-lg mb-6 text-sm bg-white focus:outline-none focus:border-indigo-400">
        {Object.entries(ACTIVITY_LABELS).map(([val, label]) => (
          <option key={val} value={val}>{label}</option>
        ))}
      </select>

      <button onClick={handleSave} disabled={!allFilled}
        className={`w-full py-3 rounded-xl text-white font-semibold text-sm ${allFilled ? 'bg-indigo-600 active:bg-indigo-700' : 'bg-gray-300'}`}>
        保存并生成方案
      </button>
      {data.profile && <p className="text-xs text-gray-400 text-center mt-2">方案已根据最新数据自动重算</p>}
    </div>
  );
}
