import { Meal } from './meal.model';

export class Day {
  public meals: Meal[];
  public date: Date;
  constructor() {
    this.meals = [];
    this.date = new Date(Date.now());
  }
}
