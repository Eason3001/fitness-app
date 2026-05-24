import { useState } from 'react';
import type { ExerciseLog } from '../types';
import { useAppData } from '../hooks/useAppData';
import { useTodayLogs } from '../hooks/useTodayLogs';
import { exerciseDb } from '../utils/exerciseDb';
import { calcExerciseCalories, generateId } from '../utils/calculations';

function today(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

export function ExercisePage() {
  const { data, addExerciseLog, removeExerciseLog } = useAppData();
  const { todayExercises } = useTodayLogs(data.foodLogs, data.exerciseLogs);
  const [selectedExercise, setSelectedExercise] = useState('');
  const [minutes, setMinutes] = useState(30);

  const handleAdd = () => {
    const exercise = exerciseDb.find(e => e.name === selectedExercise);
    if (!exercise || minutes <= 0 || !data.profile) return;
    const { calories, returnedCalories } = calcExerciseCalories(exercise.caloriesPer10min, data.profile.weight, minutes);
    const log: ExerciseLog = { id: generateId(), date: today(), type: exercise.name, minutes, calories, returnedCalories };
    addExerciseLog(log);
    setSelectedExercise('');
    setMinutes(30);
  };

  return (
    <div className="p-4 pb-24 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">运动记录</h1>

      {todayExercises.length > 0 && (
        <div className="bg-white rounded-xl p-3 mb-4 shadow-sm">
          <h2 className="text-sm font-semibold mb-2">今日运动</h2>
          {todayExercises.map(log => (
            <div key={log.id} className="flex justify-between items-center text-sm py-1.5 border-b border-gray-50 last:border-0">
              <div>
                <span>{log.type}</span>
                <span className="text-gray-400 ml-1">{log.minutes}分钟</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-400">消耗 {log.calories}</span>
                <span className="font-medium text-green-600">+{log.returnedCalories} kcal</span>
                <button onClick={() => removeExerciseLog(log.id)} className="text-red-400 text-xs">删除</button>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="bg-white rounded-xl p-4 shadow-sm">
        <h2 className="text-sm font-semibold mb-3">添加运动</h2>

        <div className="max-h-60 overflow-y-auto mb-3 border border-gray-100 rounded-lg">
          {exerciseDb.map(e => (
            <button key={e.name} onClick={() => setSelectedExercise(e.name)}
              className={`w-full text-left px-3 py-2.5 text-sm border-b border-gray-50 last:border-0 flex justify-between ${selectedExercise === e.name ? 'bg-indigo-50 text-indigo-700' : ''}`}>
              <span>{e.name}</span>
              <span className="text-gray-400 text-xs">{e.caloriesPer10min.kg70} kcal/10min</span>
            </button>
          ))}
        </div>

        {selectedExercise && (
          <>
            <label className="text-xs text-gray-500 mb-1 block">时长（分钟）</label>
            <div className="flex items-center gap-3 mb-3">
              <button onClick={() => setMinutes(Math.max(5, minutes - 5))}
                className="w-10 h-10 rounded-full bg-gray-100 text-lg font-bold">-</button>
              <input type="number" inputMode="numeric" value={minutes}
                onChange={e => setMinutes(Number(e.target.value) || 0)}
                className="w-20 text-center p-2 border border-gray-200 rounded-lg text-lg font-bold focus:outline-none focus:border-indigo-400" />
              <span className="text-gray-500 text-sm">分钟</span>
              <button onClick={() => setMinutes(minutes + 5)}
                className="w-10 h-10 rounded-full bg-gray-100 text-lg font-bold">+</button>
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
