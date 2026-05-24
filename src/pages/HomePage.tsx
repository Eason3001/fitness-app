import { useNavigate } from 'react-router-dom';
import { useAppData } from '../hooks/useAppData';
import { useTodayLogs } from '../hooks/useTodayLogs';
import { CalorieRing } from '../components/CalorieRing';
import { Macronutrients } from '../components/MacroBar';

export function HomePage() {
  const { data } = useAppData();
  const navigate = useNavigate();
  const { totalFoodCalories, totalReturnedCalories } = useTodayLogs(data.foodLogs, data.exerciseLogs);

  if (!data.profile || !data.plan) {
    return (
      <div className="p-4 pb-24 max-w-md mx-auto text-center">
        <div className="mt-20 text-6xl mb-4">🏋️</div>
        <h1 className="text-xl font-bold mb-2">健身饮食助手</h1>
        <p className="text-gray-500 text-sm mb-6">请先填写身体数据，生成专属方案</p>
        <button onClick={() => navigate('/profile')}
          className="bg-indigo-600 text-white px-8 py-3 rounded-xl font-semibold active:bg-indigo-700">
          开始填写
        </button>
      </div>
    );
  }

  const { plan, profile } = data;
  const remaining = plan.targetCalories - totalFoodCalories + totalReturnedCalories;

  return (
    <div className="p-4 pb-24 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-1">{profile.goal === 'lose' ? '减脂' : '增肌'}方案</h1>
      <p className="text-xs text-gray-400 mb-4">BMR {plan.bmr} · TDEE {plan.tdee} kcal</p>

      <div className="flex justify-center mb-6">
        <CalorieRing current={totalFoodCalories} target={plan.targetCalories} remaining={remaining} />
      </div>

      <div className="bg-white rounded-xl p-4 mb-4 shadow-sm">
        <h2 className="text-sm font-semibold mb-2">今日概要</h2>
        <div className="flex justify-between text-sm mb-1"><span className="text-gray-500">目标摄入</span><span className="font-medium">{plan.targetCalories} kcal</span></div>
        <div className="flex justify-between text-sm mb-1"><span className="text-gray-500">已摄入</span><span className="font-medium text-red-500">+{totalFoodCalories} kcal</span></div>
        <div className="flex justify-between text-sm"><span className="text-gray-500">运动返还</span><span className="font-medium text-green-500">+{totalReturnedCalories} kcal</span></div>
        <hr className="my-2" />
        <div className="flex justify-between text-sm font-bold">
          <span>剩余</span>
          <span className={remaining >= 0 ? 'text-indigo-600' : 'text-red-500'}>{Math.max(remaining, 0)} kcal</span>
        </div>
      </div>

      <div className="bg-white rounded-xl p-4 shadow-sm">
        <h2 className="text-sm font-semibold mb-3">每日营养素目标</h2>
        <Macronutrients
          protein={{ current: 0, target: plan.protein }}
          carbs={{ current: 0, target: plan.carbs }}
          fat={{ current: 0, target: plan.fat }}
        />
      </div>
    </div>
  );
}
