import { useMemo } from 'react';
import type { FoodLog, ExerciseLog } from '../types';

function today(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

export function useTodayLogs(foodLogs: FoodLog[], exerciseLogs: ExerciseLog[]) {
  return useMemo(() => {
    const t = today();
    const todayFoods = foodLogs.filter(l => l.date === t);
    const todayExercises = exerciseLogs.filter(l => l.date === t);
    const totalFoodCalories = todayFoods.reduce((sum, l) => sum + l.adjustedCalories, 0);
    const totalReturnedCalories = todayExercises.reduce((sum, l) => sum + l.returnedCalories, 0);
    const totalProtein = todayFoods.reduce((sum, l) => sum + (l.protein || 0), 0);
    const totalCarbs = todayFoods.reduce((sum, l) => sum + (l.carbs || 0), 0);
    const totalFat = todayFoods.reduce((sum, l) => sum + (l.fat || 0), 0);
    return { todayFoods, todayExercises, totalFoodCalories, totalReturnedCalories, totalProtein, totalCarbs, totalFat };
  }, [foodLogs, exerciseLogs]);
}
