import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-display',
  inputs: ['meal'],
  template: `
      <h4>{{meal.name}}</h4>
      <p><strong>Calories: </strong>{{meal.calories}}</p>
      <p><strong>Protein: </strong>{{meal.protein}}
        <strong> | Lipids: </strong>{{meal.lipids}}
        <strong> | Carbohydrates: </strong>{{meal.carbs}}</p>
    `
})
export class MealDisplayComponent {
  public meal: Meal;
}
