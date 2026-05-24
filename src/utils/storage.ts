import type { AppData } from '../types';

const STORAGE_KEY = 'fitness_data';

const defaultData: AppData = {
  profile: null,
  plan: null,
  foodLogs: [],
  exerciseLogs: [],
};

export function loadData(): AppData {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { ...defaultData, foodLogs: [], exerciseLogs: [] };
    return JSON.parse(raw) as AppData;
  } catch {
    return { ...defaultData, foodLogs: [], exerciseLogs: [] };
  }
}

export function saveData(data: AppData): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}
