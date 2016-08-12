import { Component, EventEmitter } from 'angular2/core';
import { EditMealComponent } from './edit-meal.component';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-display',
  inputs: ['meal'],
  outputs: ['onAddRemove'],
  directives: [EditMealComponent],
  template: `
      <h4>{{meal.name}}</h4>
      <p>{{meal.details}}</p>
      <p><strong>Calories: </strong>{{meal.calories}}</p>
      <p><strong>Protein: </strong>{{meal.protein}}
        <strong> | Lipids: </strong>{{meal.lipids}}
        <strong> | Carbohydrates: </strong>{{meal.carbs}}</p>
      <edit-meal *ngIf="beingEdited" [meal]="meal"></edit-meal>
      <button (click)="edit()">{{beingEdited?"Done":"Edit"}}</button>
      <button (click)="addRemove()">Add/Remove</button>
    `
})
export class MealDisplayComponent {
  public onAddRemove: EventEmitter<Meal>;
  public meal: Meal;
  public beingEdited = false;
  constructor() {
    this.onAddRemove = new EventEmitter();
  }
  edit() {
    this.beingEdited = !this.beingEdited;
  }
  addRemove() {
    this.onAddRemove.emit(this.meal);
  }
}
