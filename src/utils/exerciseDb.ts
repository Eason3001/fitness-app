import type { ExerciseItem } from '../types';

export const exerciseDb: ExerciseItem[] = [
  { name: '跑步(慢跑)', caloriesPer10min: { kg60: 60, kg70: 70, kg80: 80 } },
  { name: '跑步(快跑)', caloriesPer10min: { kg60: 90, kg70: 105, kg80: 120 } },
  { name: '快走', caloriesPer10min: { kg60: 40, kg70: 47, kg80: 53 } },
  { name: '散步', caloriesPer10min: { kg60: 25, kg70: 30, kg80: 34 } },
  { name: '跳绳', caloriesPer10min: { kg60: 80, kg70: 93, kg80: 107 } },
  { name: '游泳', caloriesPer10min: { kg60: 70, kg70: 82, kg80: 93 } },
  { name: '骑行', caloriesPer10min: { kg60: 50, kg70: 58, kg80: 67 } },
  { name: 'HIIT', caloriesPer10min: { kg60: 100, kg70: 117, kg80: 133 } },
  { name: '力量训练', caloriesPer10min: { kg60: 45, kg70: 52, kg80: 60 } },
  { name: '瑜伽', caloriesPer10min: { kg60: 25, kg70: 30, kg80: 34 } },
  { name: '篮球', caloriesPer10min: { kg60: 65, kg70: 76, kg80: 87 } },
  { name: '足球', caloriesPer10min: { kg60: 70, kg70: 82, kg80: 93 } },
  { name: '羽毛球', caloriesPer10min: { kg60: 55, kg70: 64, kg80: 73 } },
  { name: '乒乓球', caloriesPer10min: { kg60: 35, kg70: 41, kg80: 47 } },
  { name: '爬楼梯', caloriesPer10min: { kg60: 70, kg70: 82, kg80: 93 } },
  { name: '拳击', caloriesPer10min: { kg60: 80, kg70: 93, kg80: 107 } },
  { name: '舞蹈', caloriesPer10min: { kg60: 50, kg70: 58, kg80: 67 } },
  { name: '登山', caloriesPer10min: { kg60: 65, kg70: 76, kg80: 87 } },
];
