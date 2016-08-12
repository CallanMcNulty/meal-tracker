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
      <h4>{{day.date.toDateString()}}</h4>
      <meal-list
        [meals]='day.meals'>
      </meal-list>
    </div>
    `
})
export class DayDisplayComponent {
  public day: Day;
}
