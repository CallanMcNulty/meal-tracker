import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  outputs: ['onNewMealSubmit'],
  template: `
    <h3>Add New Meal</h3>
    <div>
      <input type="text" placeholder="Meal Name" #name>
      <input type="text" placeholder="Details" #details>
      <input type="number" placeholder="Calories" #cal>
      <input type="number" placeholder="Protein (g)" #protein>
      <input type="number" placeholder="Lipids (g)" #lipids>
      <input type="number" placeholder="Carbohydrates (g)" #carbs>
      <button (click)="createNewMeal(name, details, cal, protein, lipids, carbs)">Add</button>
    </div>
  `
})
export class NewMealComponent {
  public onNewMealSubmit: EventEmitter<Meal>;
  constructor() {
    this.onNewMealSubmit = new EventEmitter();
  }
  createNewMeal(name: HTMLInputElement, details: HTMLInputElement, cal: HTMLInputElement, protein: HTMLInputElement, lipids: HTMLInputElement, carbs: HTMLInputElement, ) {
    this.onNewMealSubmit.emit(new Meal(name.value, details.value, parseFloat(cal.value), parseFloat(protein.value), parseFloat(lipids.value), parseFloat(carbs.value)));
  }
}
