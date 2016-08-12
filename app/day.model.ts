import { Meal } from './meal.model';

export class Day {
  public meals: Meal[];
  public date: Date;
  constructor() {
    this.meals = [];
    this.date = new Date(Date.now());
  }
  totalCalories() {
    var total = 0;
    for(var m of this.meals) {
      total+=m.calories;
    }
    return total;
  }
  totalProtein() {
    var total = 0;
    for(var m of this.meals) {
      total+=m.protein;
    }
    return total;
  }
  totalLipids() {
    var total = 0;
    for(var m of this.meals) {
      total+=m.lipids;
    }
    return total;
  }
  totalCarbs() {
    var total = 0;
    for(var m of this.meals) {
      total+=m.carbs;
    }
    return total;
  }
}
