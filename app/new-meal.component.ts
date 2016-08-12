import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  outputs: ['onNewMealSubmit'],
  template: `
    <h4>Add New Meal</h4>
    <div class="form-inline">
      <input class="form-control" type="text" placeholder="Meal Name" #name>
      <input class="form-control" type="text" placeholder="Details" #details>
      <br>
      <input class="form-control" type="number" placeholder="Calories" #cal>
      <input class="form-control" type="number" placeholder="Protein (g)" #protein>
      <br>
      <input class="form-control" type="number" placeholder="Lipids (g)" #lipids>
      <input class="form-control" type="number" placeholder="Carbohydrates (g)" #carbs>
      <br>
      <button class="btn btn-success center-block" (click)="createNewMeal(name, details, cal, protein, lipids, carbs)">Add</button>
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
    name.value = "";
    details.value = "";
    cal.value = "";
    protein.value = "";
    lipids.value = "";
    carbs.value = "";
  }
}
