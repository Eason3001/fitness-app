import type { Profile, Plan } from '../types';

export function calcBMR(profile: Profile): number {
  const { gender, weight, height, age } = profile;
  if (gender === 'male') return 10 * weight + 6.25 * height - 5 * age + 5;
  return 10 * weight + 6.25 * height - 5 * age - 161;
}

export function calcTDEE(bmr: number, activityLevel: number): number {
  return Math.round(bmr * activityLevel);
}

export function calcTargetCalories(tdee: number, goal: 'lose' | 'gain'): number {
  if (goal === 'lose') return Math.round(tdee * 0.85);
  return tdee + 200;
}

export function calcMinCalories(gender: 'male' | 'female'): number {
  return gender === 'male' ? 1500 : 1200;
}

export function calcProtein(weight: number, goal: 'lose' | 'gain'): number {
  return Math.round(weight * (goal === 'lose' ? 1.8 : 1.6));
}

export function calcFat(targetCalories: number): number {
  return Math.round((targetCalories * 0.25) / 9);
}

export function calcCarbs(targetCalories: number, protein: number, fat: number): number {
  return Math.round((targetCalories - protein * 4 - fat * 9) / 4);
}

export function calcExerciseCalories(
  calPer10min: { kg60: number; kg70: number; kg80: number },
  weight: number,
  minutes: number,
): { calories: number; returnedCalories: number } {
  let rate: number;
  if (weight <= 65) rate = calPer10min.kg60;
  else if (weight <= 75) rate = calPer10min.kg70;
  else rate = calPer10min.kg80;
  const calories = Math.round((rate / 10) * minutes);
  return { calories, returnedCalories: Math.round(calories * 0.6) };
}

export function generatePlan(profile: Profile): Plan {
  const bmr = Math.round(calcBMR(profile));
  const tdee = calcTDEE(bmr, profile.activityLevel);
  const targetCalories = calcTargetCalories(tdee, profile.goal);
  const minCalories = calcMinCalories(profile.gender);
  const protein = calcProtein(profile.weight, profile.goal);
  const fat = calcFat(targetCalories);
  const carbs = calcCarbs(targetCalories, protein, fat);
  return { bmr, tdee, targetCalories: Math.max(targetCalories, minCalories), protein, carbs, fat, minCalories };
}

export function calcFoodCalories(
  caloriesPer100g: number, gramsPerFist: number, fists: number, foodTypeModifier: number,
): { calories: number; adjustedCalories: number } {
  const raw = Math.round((caloriesPer100g / 100) * gramsPerFist * fists);
  return { calories: raw, adjustedCalories: Math.round(raw * foodTypeModifier) };
}

export function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}
