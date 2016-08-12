import { Component } from 'angular2/core';
import { EditMealComponent } from './edit-meal.component';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-display',
  inputs: ['meal'],
  directives: [EditMealComponent],
  template: `
      <h4>{{meal.name}}</h4>
      <p><strong>Calories: </strong>{{meal.calories}}</p>
      <p><strong>Protein: </strong>{{meal.protein}}
        <strong> | Lipids: </strong>{{meal.lipids}}
        <strong> | Carbohydrates: </strong>{{meal.carbs}}</p>
      <edit-meal *ngIf="beingEdited" [meal]="meal"></edit-meal>
      <button (click)="edit()">{{beingEdited?"Done":"Edit"}}</button>
    `
})
export class MealDisplayComponent {
  public meal: Meal;
  public beingEdited = false;
  edit() {
    this.beingEdited = !this.beingEdited;
  }
}
