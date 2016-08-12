import { Component } from 'angular2/core';
import { NewMealComponent } from './new-meal.component';
import { MealListComponent } from './meal-list.component';
import { Meal } from './meal.model';

@Component({
  selector: 'app',
  directives: [NewMealComponent, MealListComponent],
  template: `
    <div class = "container">
      <h1>Meal Tracker</h1>
      <new-meal
        (onNewMealSubmit)="addMeal($event)">
      </new-meal>
      <meal-list
        [meals]='meals'>
      </meal-list>
    </div>
    `
})
export class AppComponent {
  public meals: Meal[];
  constructor() {
    this.meals = [
      new Meal("Egg", "1, boiled", 78, 6, 5, 0.6),
      new Meal("Banana", "1, medium sized", 105, 1.3, .4, 27),
      new Meal("Oatmeal", "1 cup, cooked", 158, 6, 3.2, 27)
    ];
    console.log(this.meals);
  }
  addMeal(meal) {
    this.meals.push(meal);
    console.log(this.meals);
  }
}
