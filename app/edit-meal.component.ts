import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal',
  inputs: ['meal'],
  template: `
      <input [(ngModel)]='meal.name'>
      <input [(ngModel)]='meal.details'>
      <input [(ngModel)]='meal.calories' type="number">
      <input [(ngModel)]='meal.protein' type="number">
      <input [(ngModel)]='meal.lipids' type="number">
      <input [(ngModel)]='meal.carbs' type="number">
    `
})
export class EditMealComponent {
  public meal: Meal;
}
