export interface Profile {
  gender: 'male' | 'female';
  age: number;
  height: number;
  weight: number;
  goal: 'lose' | 'gain';
  activityLevel: 1.2 | 1.35 | 1.45 | 1.6 | 1.8;
}

export interface Plan {
  bmr: number;
  tdee: number;
  targetCalories: number;
  protein: number;
  carbs: number;
  fat: number;
  minCalories: number;
}

export interface FoodLog {
  id: string;
  date: string;
  meal: 'breakfast' | 'lunch' | 'dinner' | 'snack';
  name: string;
  fists: number;
  calories: number;
  adjustedCalories: number;
  foodType: 'normal' | 'stir_fried' | 'takeout' | 'fried';
}

export interface ExerciseLog {
  id: string;
  date: string;
  type: string;
  minutes: number;
  calories: number;
  returnedCalories: number;
}

export interface FoodItem {
  name: string;
  gramsPerFist: number;
  caloriesPer100g: number;
  foodType: 'normal' | 'stir_fried' | 'takeout' | 'fried';
  category: 'staple' | 'meat' | 'vegetable' | 'egg_dairy' | 'fruit' | 'snack';
}

export interface ExerciseItem {
  name: string;
  caloriesPer10min: {
    kg60: number;
    kg70: number;
    kg80: number;
  };
}

export interface AppData {
  profile: Profile | null;
  plan: Plan | null;
  foodLogs: FoodLog[];
  exerciseLogs: ExerciseLog[];
}

export type MealType = 'breakfast' | 'lunch' | 'dinner' | 'snack';

export const MEAL_LABELS: Record<MealType, string> = {
  breakfast: '早餐',
  lunch: '午餐',
  dinner: '晚餐',
  snack: '加餐',
};

export const ACTIVITY_LABELS: Record<number, string> = {
  1.2: '久坐（几乎不运动）',
  1.35: '轻度活动（每周1-2练）',
  1.45: '中等活动（每周3-5练）',
  1.6: '高活动（每周6练以上）',
  1.8: '运动员级别',
};

export const FOOD_TYPE_LABELS: Record<string, string> = {
  normal: '正常/水煮',
  stir_fried: '炒菜',
  takeout: '外卖',
  fried: '炸物',
};

export const FOOD_TYPE_MODIFIER: Record<string, number> = {
  normal: 1.0,
  stir_fried: 1.15,
  takeout: 1.20,
  fried: 1.25,
};
