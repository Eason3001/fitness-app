import type { FoodItem } from '../types';

export const foodDb: FoodItem[] = [
  // ========== 主食 ==========
  { name: '熟米饭', gramsPerFist: 200, caloriesPer100g: 116, proteinPer100g: 2.6, carbsPer100g: 25.9, fatPer100g: 0.3, foodType: 'normal', category: 'staple' },
  { name: '馒头', gramsPerFist: 150, caloriesPer100g: 223, proteinPer100g: 7.0, carbsPer100g: 44.2, fatPer100g: 1.1, foodType: 'normal', category: 'staple' },
  { name: '面条(熟)', gramsPerFist: 200, caloriesPer100g: 110, proteinPer100g: 3.5, carbsPer100g: 22.0, fatPer100g: 0.5, foodType: 'normal', category: 'staple' },
  { name: '荞麦面(熟)', gramsPerFist: 200, caloriesPer100g: 105, proteinPer100g: 4.2, carbsPer100g: 20.0, fatPer100g: 0.7, foodType: 'normal', category: 'staple' },
  { name: '燕麦', gramsPerFist: 80, caloriesPer100g: 377, proteinPer100g: 13.5, carbsPer100g: 66.3, fatPer100g: 6.7, foodType: 'normal', category: 'staple' },
  { name: '全麦面包', gramsPerFist: 100, caloriesPer100g: 246, proteinPer100g: 9.0, carbsPer100g: 43.0, fatPer100g: 3.4, foodType: 'normal', category: 'staple' },
  { name: '红薯', gramsPerFist: 200, caloriesPer100g: 86, proteinPer100g: 1.6, carbsPer100g: 20.1, fatPer100g: 0.1, foodType: 'normal', category: 'staple' },
  { name: '玉米', gramsPerFist: 200, caloriesPer100g: 112, proteinPer100g: 4.0, carbsPer100g: 22.8, fatPer100g: 1.2, foodType: 'normal', category: 'staple' },
  { name: '土豆', gramsPerFist: 200, caloriesPer100g: 81, proteinPer100g: 2.0, carbsPer100g: 17.5, fatPer100g: 0.2, foodType: 'normal', category: 'staple' },
  { name: '饺子', gramsPerFist: 150, caloriesPer100g: 200, proteinPer100g: 7.5, carbsPer100g: 28.0, fatPer100g: 6.5, foodType: 'normal', category: 'staple' },
  { name: '包子', gramsPerFist: 150, caloriesPer100g: 220, proteinPer100g: 8.0, carbsPer100g: 30.0, fatPer100g: 8.0, foodType: 'normal', category: 'staple' },
  { name: '花卷', gramsPerFist: 150, caloriesPer100g: 211, proteinPer100g: 6.4, carbsPer100g: 45.6, fatPer100g: 1.1, foodType: 'normal', category: 'staple' },
  { name: '油条', gramsPerFist: 80, caloriesPer100g: 388, proteinPer100g: 6.9, carbsPer100g: 51.0, fatPer100g: 17.6, foodType: 'fried', category: 'staple' },

  // ========== 肉类 ==========
  { name: '鸡胸肉', gramsPerFist: 150, caloriesPer100g: 120, proteinPer100g: 24.6, carbsPer100g: 0.5, fatPer100g: 1.9, foodType: 'normal', category: 'meat' },
  { name: '鸡腿肉', gramsPerFist: 150, caloriesPer100g: 150, proteinPer100g: 20.2, carbsPer100g: 0, fatPer100g: 7.2, foodType: 'normal', category: 'meat' },
  { name: '鸡翅', gramsPerFist: 150, caloriesPer100g: 194, proteinPer100g: 17.4, carbsPer100g: 0, fatPer100g: 13.4, foodType: 'normal', category: 'meat' },
  { name: '猪瘦肉', gramsPerFist: 150, caloriesPer100g: 143, proteinPer100g: 20.3, carbsPer100g: 1.5, fatPer100g: 6.2, foodType: 'stir_fried', category: 'meat' },
  { name: '五花肉', gramsPerFist: 150, caloriesPer100g: 349, proteinPer100g: 7.7, carbsPer100g: 0, fatPer100g: 35.3, foodType: 'stir_fried', category: 'meat' },
  { name: '猪蹄', gramsPerFist: 150, caloriesPer100g: 260, proteinPer100g: 27.5, carbsPer100g: 0, fatPer100g: 18.8, foodType: 'braised', category: 'meat' },
  { name: '牛肉(瘦)', gramsPerFist: 150, caloriesPer100g: 106, proteinPer100g: 20.2, carbsPer100g: 1.2, fatPer100g: 2.3, foodType: 'normal', category: 'meat' },
  { name: '牛腩', gramsPerFist: 150, caloriesPer100g: 200, proteinPer100g: 17.0, carbsPer100g: 0, fatPer100g: 14.0, foodType: 'stir_fried', category: 'meat' },
  { name: '酱牛肉', gramsPerFist: 150, caloriesPer100g: 198, proteinPer100g: 31.0, carbsPer100g: 3.2, fatPer100g: 7.0, foodType: 'braised', category: 'meat' },
  { name: '羊肉', gramsPerFist: 150, caloriesPer100g: 203, proteinPer100g: 19.0, carbsPer100g: 0, fatPer100g: 14.1, foodType: 'stir_fried', category: 'meat' },
  { name: '鸭肉', gramsPerFist: 150, caloriesPer100g: 240, proteinPer100g: 15.5, carbsPer100g: 0.1, fatPer100g: 19.7, foodType: 'normal', category: 'meat' },
  { name: '排骨', gramsPerFist: 150, caloriesPer100g: 264, proteinPer100g: 18.3, carbsPer100g: 0, fatPer100g: 20.4, foodType: 'stir_fried', category: 'meat' },
  { name: '腊肉/香肠', gramsPerFist: 100, caloriesPer100g: 498, proteinPer100g: 12.5, carbsPer100g: 3.5, fatPer100g: 48.0, foodType: 'stir_fried', category: 'meat' },

  // ========== 水产 ==========
  { name: '鱼肉', gramsPerFist: 150, caloriesPer100g: 100, proteinPer100g: 18.0, carbsPer100g: 0, fatPer100g: 3.0, foodType: 'normal', category: 'seafood' },
  { name: '三文鱼', gramsPerFist: 150, caloriesPer100g: 208, proteinPer100g: 20.4, carbsPer100g: 0, fatPer100g: 13.4, foodType: 'normal', category: 'seafood' },
  { name: '虾仁', gramsPerFist: 150, caloriesPer100g: 48, proteinPer100g: 10.4, carbsPer100g: 0, fatPer100g: 0.5, foodType: 'normal', category: 'seafood' },
  { name: '带鱼', gramsPerFist: 150, caloriesPer100g: 127, proteinPer100g: 17.7, carbsPer100g: 0, fatPer100g: 4.9, foodType: 'stir_fried', category: 'seafood' },
  { name: '鱿鱼', gramsPerFist: 150, caloriesPer100g: 75, proteinPer100g: 15.0, carbsPer100g: 1.5, fatPer100g: 0.8, foodType: 'normal', category: 'seafood' },

  // ========== 蔬菜 ==========
  { name: '青菜(炒)', gramsPerFist: 100, caloriesPer100g: 60, proteinPer100g: 1.5, carbsPer100g: 3.0, fatPer100g: 4.5, foodType: 'stir_fried', category: 'vegetable' },
  { name: '西兰花', gramsPerFist: 100, caloriesPer100g: 36, proteinPer100g: 4.1, carbsPer100g: 4.3, fatPer100g: 0.4, foodType: 'normal', category: 'vegetable' },
  { name: '番茄', gramsPerFist: 150, caloriesPer100g: 18, proteinPer100g: 0.9, carbsPer100g: 3.9, fatPer100g: 0.2, foodType: 'normal', category: 'vegetable' },
  { name: '黄瓜', gramsPerFist: 150, caloriesPer100g: 16, proteinPer100g: 0.7, carbsPer100g: 2.9, fatPer100g: 0.2, foodType: 'normal', category: 'vegetable' },
  { name: '茄子(炒)', gramsPerFist: 150, caloriesPer100g: 70, proteinPer100g: 1.1, carbsPer100g: 5.9, fatPer100g: 5.0, foodType: 'stir_fried', category: 'vegetable' },
  { name: '豆角(炒)', gramsPerFist: 100, caloriesPer100g: 65, proteinPer100g: 2.5, carbsPer100g: 6.7, fatPer100g: 3.5, foodType: 'stir_fried', category: 'vegetable' },
  { name: '豆芽', gramsPerFist: 100, caloriesPer100g: 25, proteinPer100g: 3.0, carbsPer100g: 3.0, fatPer100g: 0.2, foodType: 'normal', category: 'vegetable' },
  { name: '海带', gramsPerFist: 100, caloriesPer100g: 13, proteinPer100g: 1.2, carbsPer100g: 2.0, fatPer100g: 0.1, foodType: 'cold', category: 'vegetable' },
  { name: '白菜', gramsPerFist: 100, caloriesPer100g: 13, proteinPer100g: 1.5, carbsPer100g: 2.2, fatPer100g: 0.2, foodType: 'normal', category: 'vegetable' },
  { name: '菠菜', gramsPerFist: 100, caloriesPer100g: 24, proteinPer100g: 2.9, carbsPer100g: 3.6, fatPer100g: 0.4, foodType: 'normal', category: 'vegetable' },
  { name: '胡萝卜', gramsPerFist: 150, caloriesPer100g: 41, proteinPer100g: 1.0, carbsPer100g: 9.6, fatPer100g: 0.2, foodType: 'normal', category: 'vegetable' },
  { name: '洋葱', gramsPerFist: 150, caloriesPer100g: 40, proteinPer100g: 1.1, carbsPer100g: 9.3, fatPer100g: 0.1, foodType: 'normal', category: 'vegetable' },
  { name: '香菇', gramsPerFist: 100, caloriesPer100g: 26, proteinPer100g: 2.9, carbsPer100g: 5.2, fatPer100g: 0.3, foodType: 'normal', category: 'vegetable' },
  { name: '木耳', gramsPerFist: 50, caloriesPer100g: 27, proteinPer100g: 1.5, carbsPer100g: 6.0, fatPer100g: 0.2, foodType: 'cold', category: 'vegetable' },
  { name: '莲藕', gramsPerFist: 150, caloriesPer100g: 73, proteinPer100g: 2.2, carbsPer100g: 16.4, fatPer100g: 0.2, foodType: 'normal', category: 'vegetable' },
  { name: '芹菜', gramsPerFist: 100, caloriesPer100g: 14, proteinPer100g: 0.7, carbsPer100g: 3.0, fatPer100g: 0.1, foodType: 'normal', category: 'vegetable' },

  // ========== 豆制品 ==========
  { name: '豆腐', gramsPerFist: 150, caloriesPer100g: 82, proteinPer100g: 8.1, carbsPer100g: 4.2, fatPer100g: 3.7, foodType: 'normal', category: 'soy' },
  { name: '豆皮/千张', gramsPerFist: 100, caloriesPer100g: 266, proteinPer100g: 25.3, carbsPer100g: 12.3, fatPer100g: 13.4, foodType: 'normal', category: 'soy' },
  { name: '腐竹', gramsPerFist: 50, caloriesPer100g: 459, proteinPer100g: 44.6, carbsPer100g: 22.3, fatPer100g: 21.7, foodType: 'normal', category: 'soy' },
  { name: '豆腐干', gramsPerFist: 100, caloriesPer100g: 140, proteinPer100g: 16.2, carbsPer100g: 4.5, fatPer100g: 6.8, foodType: 'normal', category: 'soy' },
  { name: '毛豆', gramsPerFist: 100, caloriesPer100g: 131, proteinPer100g: 13.1, carbsPer100g: 10.5, fatPer100g: 5.0, foodType: 'normal', category: 'soy' },

  // ========== 蛋奶 ==========
  { name: '鸡蛋(1个)', gramsPerFist: 50, caloriesPer100g: 140, proteinPer100g: 13.3, carbsPer100g: 2.8, fatPer100g: 8.8, foodType: 'normal', category: 'egg_dairy' },
  { name: '鹌鹑蛋', gramsPerFist: 50, caloriesPer100g: 160, proteinPer100g: 12.8, carbsPer100g: 1.0, fatPer100g: 11.1, foodType: 'normal', category: 'egg_dairy' },
  { name: '纯牛奶', gramsPerFist: 250, caloriesPer100g: 60, proteinPer100g: 3.0, carbsPer100g: 5.0, fatPer100g: 3.2, foodType: 'normal', category: 'egg_dairy' },
  { name: '酸奶', gramsPerFist: 200, caloriesPer100g: 80, proteinPer100g: 2.5, carbsPer100g: 11.0, fatPer100g: 2.7, foodType: 'normal', category: 'egg_dairy' },
  { name: '奶酪', gramsPerFist: 50, caloriesPer100g: 328, proteinPer100g: 25.7, carbsPer100g: 3.5, fatPer100g: 23.5, foodType: 'normal', category: 'egg_dairy' },

  // ========== 水果 ==========
  { name: '苹果(1个)', gramsPerFist: 200, caloriesPer100g: 52, proteinPer100g: 0.3, carbsPer100g: 13.8, fatPer100g: 0.2, foodType: 'normal', category: 'fruit' },
  { name: '香蕉(1根)', gramsPerFist: 120, caloriesPer100g: 91, proteinPer100g: 1.4, carbsPer100g: 22.0, fatPer100g: 0.2, foodType: 'normal', category: 'fruit' },
  { name: '橙子', gramsPerFist: 200, caloriesPer100g: 47, proteinPer100g: 0.9, carbsPer100g: 11.8, fatPer100g: 0.1, foodType: 'normal', category: 'fruit' },
  { name: '葡萄', gramsPerFist: 200, caloriesPer100g: 69, proteinPer100g: 0.7, carbsPer100g: 18.1, fatPer100g: 0.2, foodType: 'normal', category: 'fruit' },
  { name: '西瓜', gramsPerFist: 300, caloriesPer100g: 30, proteinPer100g: 0.6, carbsPer100g: 6.8, fatPer100g: 0.1, foodType: 'normal', category: 'fruit' },
  { name: '草莓', gramsPerFist: 150, caloriesPer100g: 32, proteinPer100g: 0.7, carbsPer100g: 7.7, fatPer100g: 0.3, foodType: 'normal', category: 'fruit' },
  { name: '蓝莓', gramsPerFist: 100, caloriesPer100g: 57, proteinPer100g: 0.7, carbsPer100g: 14.5, fatPer100g: 0.3, foodType: 'normal', category: 'fruit' },
  { name: '猕猴桃', gramsPerFist: 150, caloriesPer100g: 61, proteinPer100g: 1.1, carbsPer100g: 14.7, fatPer100g: 0.5, foodType: 'normal', category: 'fruit' },

  // ========== 零食 ==========
  { name: '薯片', gramsPerFist: 50, caloriesPer100g: 530, proteinPer100g: 7.0, carbsPer100g: 50.0, fatPer100g: 34.0, foodType: 'fried', category: 'snack' },
  { name: '饼干', gramsPerFist: 50, caloriesPer100g: 433, proteinPer100g: 6.5, carbsPer100g: 70.0, fatPer100g: 14.0, foodType: 'normal', category: 'snack' },
  { name: '蛋糕', gramsPerFist: 100, caloriesPer100g: 347, proteinPer100g: 5.3, carbsPer100g: 57.0, fatPer100g: 12.0, foodType: 'normal', category: 'snack' },
  { name: '巧克力', gramsPerFist: 50, caloriesPer100g: 546, proteinPer100g: 5.0, carbsPer100g: 59.0, fatPer100g: 31.0, foodType: 'normal', category: 'snack' },
  { name: '坚果', gramsPerFist: 50, caloriesPer100g: 600, proteinPer100g: 15.0, carbsPer100g: 17.0, fatPer100g: 52.0, foodType: 'normal', category: 'snack' },
  { name: '冰淇淋', gramsPerFist: 100, caloriesPer100g: 200, proteinPer100g: 3.5, carbsPer100g: 24.0, fatPer100g: 9.0, foodType: 'normal', category: 'snack' },
  { name: '辣条', gramsPerFist: 30, caloriesPer100g: 480, proteinPer100g: 8.0, carbsPer100g: 45.0, fatPer100g: 28.0, foodType: 'fried', category: 'snack' },

  // ========== 饮品 ==========
  { name: '豆浆', gramsPerFist: 250, caloriesPer100g: 33, proteinPer100g: 3.0, carbsPer100g: 1.2, fatPer100g: 1.6, foodType: 'normal', category: 'drink' },
  { name: '可乐', gramsPerFist: 250, caloriesPer100g: 42, proteinPer100g: 0, carbsPer100g: 10.6, fatPer100g: 0, foodType: 'normal', category: 'drink' },
  { name: '奶茶', gramsPerFist: 250, caloriesPer100g: 70, proteinPer100g: 1.0, carbsPer100g: 10.0, fatPer100g: 3.0, foodType: 'normal', category: 'drink' },
  { name: '啤酒', gramsPerFist: 300, caloriesPer100g: 43, proteinPer100g: 0.5, carbsPer100g: 3.5, fatPer100g: 0, foodType: 'normal', category: 'drink' },
];

export const foodCategories = [
  { key: 'all', label: '全部' },
  { key: 'staple', label: '主食' },
  { key: 'meat', label: '肉类' },
  { key: 'seafood', label: '水产' },
  { key: 'vegetable', label: '蔬菜' },
  { key: 'soy', label: '豆制品' },
  { key: 'egg_dairy', label: '蛋奶' },
  { key: 'fruit', label: '水果' },
  { key: 'snack', label: '零食' },
  { key: 'drink', label: '饮品' },
];
