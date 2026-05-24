import { useState, useCallback } from 'react';
import type { AppData, Profile, FoodLog, ExerciseLog } from '../types';
import { loadData, saveData } from '../utils/storage';
import { generatePlan } from '../utils/calculations';

export function useAppData() {
  const [data, setData] = useState<AppData>(loadData);

  const persist = useCallback((newData: AppData) => {
    setData(newData);
    saveData(newData);
  }, []);

  const updateProfile = useCallback((profile: Profile) => {
    const plan = generatePlan(profile);
    const newData = { ...loadData(), profile, plan };
    persist(newData);
  }, [persist]);

  const addFoodLog = useCallback((log: FoodLog) => {
    const newData = { ...loadData(), foodLogs: [...loadData().foodLogs, log] };
    persist(newData);
  }, [persist]);

  const removeFoodLog = useCallback((id: string) => {
    const current = loadData();
    persist({ ...current, foodLogs: current.foodLogs.filter(l => l.id !== id) });
  }, [persist]);

  const addExerciseLog = useCallback((log: ExerciseLog) => {
    const newData = { ...loadData(), exerciseLogs: [...loadData().exerciseLogs, log] };
    persist(newData);
  }, [persist]);

  const removeExerciseLog = useCallback((id: string) => {
    const current = loadData();
    persist({ ...current, exerciseLogs: current.exerciseLogs.filter(l => l.id !== id) });
  }, [persist]);

  return { data, updateProfile, addFoodLog, removeFoodLog, addExerciseLog, removeExerciseLog };
}
