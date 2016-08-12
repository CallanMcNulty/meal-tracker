import { Component } from 'angular2/core';
import { MealDisplayComponent } from './meal-display.component';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  inputs: ['meals'],
  directives: [MealDisplayComponent],
  template: `
    <div>
      <meal-display *ngFor="#meal of meals"
        [meal]="meal">
      </meal-display>
    </div>
  `
})
export class MealListComponent {
  public meals: Meal[];
}
