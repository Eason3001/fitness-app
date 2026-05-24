import { useState } from 'react';
import type { MealType, FoodLog } from '../types';
import { MEAL_LABELS, FOOD_TYPE_LABELS, FOOD_TYPE_MODIFIER } from '../types';
import { useAppData } from '../hooks/useAppData';
import { useTodayLogs } from '../hooks/useTodayLogs';
import { foodDb, foodCategories } from '../utils/foodDb';
import { calcFoodCalories, generateId } from '../utils/calculations';

function today(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

export function FoodPage() {
  const { data, addFoodLog, removeFoodLog } = useAppData();
  const { todayFoods } = useTodayLogs(data.foodLogs, data.exerciseLogs);
  const [meal, setMeal] = useState<MealType>('breakfast');
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');
  const [selectedFood, setSelectedFood] = useState('');
  const [fists, setFists] = useState(1);
  const [grams, setGrams] = useState(200);
  const [unit, setUnit] = useState<'fist' | 'gram'>('fist');
  const [foodType, setFoodType] = useState('normal');
  const meals: MealType[] = ['breakfast', 'lunch', 'dinner', 'snack'];

  const filteredFoods = foodDb.filter(f => {
    if (category !== 'all' && f.category !== category) return false;
    if (search && !f.name.includes(search)) return false;
    return true;
  });

  const handleAdd = () => {
    const food = foodDb.find(f => f.name === selectedFood);
    if (!food) return;

    let calories: number;
    let adjustedCalories: number;
    let actualGrams: number;
    const modifier = FOOD_TYPE_MODIFIER[foodType] ?? 1;

    if (unit === 'fist') {
      if (fists <= 0) return;
      actualGrams = food.gramsPerFist * fists;
      const result = calcFoodCalories(food.caloriesPer100g, food.gramsPerFist, fists, modifier);
      calories = result.calories;
      adjustedCalories = result.adjustedCalories;
    } else {
      if (grams <= 0) return;
      actualGrams = grams;
      calories = Math.round((food.caloriesPer100g / 100) * grams);
      adjustedCalories = Math.round(calories * modifier);
    }

    const log: FoodLog = {
      id: generateId(),
      date: today(),
      meal,
      name: food.name,
      fists: unit === 'fist' ? fists : 0,
      grams: unit === 'gram' ? grams : 0,
      unit,
      calories,
      adjustedCalories,
      protein: Math.round((food.proteinPer100g / 100) * actualGrams),
      carbs: Math.round((food.carbsPer100g / 100) * actualGrams),
      fat: Math.round((food.fatPer100g / 100) * actualGrams),
      foodType: foodType as FoodLog['foodType'],
    };
    addFoodLog(log);
    setSelectedFood('');
    setFists(1);
    setGrams(200);
  };

  return (
    <div className="p-4 pb-24 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">饮食记录</h1>

      {todayFoods.length > 0 && (
        <div className="bg-white rounded-xl p-3 mb-4 shadow-sm">
          <h2 className="text-sm font-semibold mb-2">今日已记录</h2>
          {todayFoods.map(log => (
            <div key={log.id} className="flex justify-between items-center text-sm py-1.5 border-b border-gray-50 last:border-0">
              <div>
                <span className="text-xs text-gray-400 mr-2">{MEAL_LABELS[log.meal]}</span>
                <span>{log.name}</span>
                <span className="text-gray-400 ml-1">
                  {log.unit === 'gram' && log.grams ? `${log.grams}g` : `×${log.fists}拳头`}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium">{log.adjustedCalories} kcal</span>
                <button onClick={() => removeFoodLog(log.id)} className="text-red-400 text-xs">删除</button>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="bg-white rounded-xl p-4 shadow-sm">
        <h2 className="text-sm font-semibold mb-3">添加食物</h2>

        <label className="text-xs text-gray-500 mb-1 block">餐次</label>
        <div className="flex gap-1 mb-3">
          {meals.map(m => (
            <button key={m} onClick={() => setMeal(m)}
              className={`flex-1 py-2 rounded-lg text-xs font-medium ${meal === m ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-600'}`}>
              {MEAL_LABELS[m]}
            </button>
          ))}
        </div>

        <input type="text" value={search} onChange={e => setSearch(e.target.value)}
          placeholder="搜索食物" className="w-full p-2.5 border border-gray-200 rounded-lg mb-3 text-sm focus:outline-none focus:border-indigo-400" />

        <div className="flex gap-1 flex-wrap mb-3">
          {foodCategories.map(c => (
            <button key={c.key} onClick={() => setCategory(c.key)}
              className={`px-2.5 py-1.5 rounded-full text-xs ${category === c.key ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-600'}`}>
              {c.label}
            </button>
          ))}
        </div>

        <div className="max-h-48 overflow-y-auto mb-3 border border-gray-100 rounded-lg">
          {filteredFoods.map(f => (
            <button key={f.name} onClick={() => setSelectedFood(f.name)}
              className={`w-full text-left px-3 py-2.5 text-sm border-b border-gray-50 last:border-0 flex justify-between ${selectedFood === f.name ? 'bg-indigo-50 text-indigo-700' : ''}`}>
              <span>{f.name}</span>
              <span className="text-gray-400 text-xs">{f.caloriesPer100g}kcal/100g · 约{f.gramsPerFist}g/拳头</span>
            </button>
          ))}
        </div>

        {selectedFood && (
          <>
            <label className="text-xs text-gray-500 mb-1 block">计量方式</label>
            <div className="flex gap-1 mb-3">
              {([{ k: 'fist', l: '拳头' }, { k: 'gram', l: '克(g)' }] as const).map(u => (
                <button key={u.k} onClick={() => setUnit(u.k)}
                  className={`flex-1 py-2 rounded-lg text-xs font-medium ${unit === u.k ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-600'}`}>
                  {u.l}
                </button>
              ))}
            </div>

            {unit === 'fist' ? (
              <>
                <label className="text-xs text-gray-500 mb-1 block">份量（拳头）</label>
                <div className="flex items-center gap-2 mb-3">
                  <button onClick={() => setFists(Math.max(0.5, fists - 0.5))}
                    className="w-10 h-10 rounded-full bg-gray-100 text-lg font-bold">-</button>
                  <span className="text-lg font-bold min-w-[3rem] text-center">{fists}</span>
                  <button onClick={() => setFists(fists + 0.5)}
                    className="w-10 h-10 rounded-full bg-gray-100 text-lg font-bold">+</button>
                </div>
              </>
            ) : (
              <>
                <label className="text-xs text-gray-500 mb-1 block">重量（克）</label>
                <div className="flex items-center gap-2 mb-3">
                  <input
                    type="number"
                    inputMode="numeric"
                    value={grams}
                    onChange={e => setGrams(Number(e.target.value) || 0)}
                    className="w-24 p-2.5 border border-gray-200 rounded-lg text-lg font-bold text-center focus:outline-none focus:border-indigo-400"
                  />
                  <span className="text-gray-500 text-sm">克 (g)</span>
                </div>
              </>
            )}

            {unit === 'fist' && selectedFood && (
              <p className="text-xs text-gray-400 mb-3">
                约 {Math.round(foodDb.find(f => f.name === selectedFood)!.gramsPerFist * fists)}g
              </p>
            )}

            <label className="text-xs text-gray-500 mb-1 block">烹饪方式</label>
            <div className="flex gap-1 flex-wrap mb-3">
              {Object.entries(FOOD_TYPE_LABELS).map(([key, label]) => (
                <button key={key} onClick={() => setFoodType(key)}
                  className={`px-3 py-1.5 rounded-lg text-xs ${foodType === key ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-600'}`}>
                  {label}
                </button>
              ))}
            </div>

            <button onClick={handleAdd}
              className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-xl text-sm active:bg-indigo-700">
              添加记录
            </button>
          </>
        )}
      </div>
    </div>
  );
}
