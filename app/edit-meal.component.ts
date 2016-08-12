import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal',
  inputs: ['meal'],
  template: `
      <label>Name: </label>
      <input class="form-control" [(ngModel)]='meal.name'>
      <label>Details: </label>
      <input class="form-control" [(ngModel)]='meal.details'>
      <label>Calories: </label>
      <input class="form-control" [(ngModel)]='meal.calories' type="number">
      <label>Protein: </label>
      <input class="form-control" [(ngModel)]='meal.protein' type="number">
      <label>Lipids: </label>
      <input class="form-control" [(ngModel)]='meal.lipids' type="number">
      <label>Carbohydrates: </label>
      <input class="form-control" [(ngModel)]='meal.carbs' type="number">
      <br>
    `
})
export class EditMealComponent {
  public meal: Meal;
}
