import { Component } from 'angular2/core';
import { MealListComponent } from './meal-list.component';
import { Meal } from './meal.model';
import { Day } from './day.model';

@Component({
  selector: 'day-display',
  inputs: ['day'],
  directives: [MealListComponent],
  template: `
    <div>
      <h4 class="text-center">{{day.date.toDateString()}}</h4>
      <meal-list
        [meals]='day.meals'
        (onMealSelect)='removeMeal($event)'>
      </meal-list>
    </div>
    `
})
export class DayDisplayComponent {
  public day: Day;
  removeMeal(meal) {
    this.day.meals.splice(this.day.meals.indexOf(meal), 1);
  }
}
