import { Component, EventEmitter } from 'angular2/core';
import { MealDisplayComponent } from './meal-display.component';
import { NameSearchPipe } from './name-search.pipe';
import { ValueSearchPipe } from './value-search.pipe';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  inputs: ['meals'],
  outputs: ['onMealSelect'],
  directives: [MealDisplayComponent],
  pipes: [NameSearchPipe, ValueSearchPipe],
  template: `
    <label>Filter Meals By:</label>
    <select (change)="changeFilter($event.target.value)">
      <option value="None">None</option>
      <option value="Name">Name</option>
      <option value="Calories">Calories</option>
      <option value="Protein">Protein</option>
      <option value="Lipids">Lipids</option>
      <option value="Carbohydrates">Carbohydrates</option>
    </select>
    <div class="form-inline" *ngIf="filterBy==='Name'">
      <input class="form-control" placeholder="Name" #newName>
      <button class="btn btn-primary" (click)="setFilterName(newName)">Search</button>
    </div>
    <div class="form-inline" *ngIf="!(filterBy==='Name' || filterBy==='None')">
      <input class="form-control" type="number" placeholder="Minimum Value" #newLow>
      <input class="form-control" type="number" placeholder="Maximum Value" #newHigh>
      <button class="btn btn-primary" (click)="setFilterVals(newLow, newHigh)">Search</button>
    </div>
    <hr>
    <div class="list">
      <meal-display *ngFor="#meal of meals | nameSearch:filterName | valueSearch:filterBy:filterLow:filterHigh"
        [meal]="meal"
        (onAddRemove)="emitMeal($event)">
      </meal-display>
    </div>
    <hr>
  `
})
export class MealListComponent {
  public onMealSelect: EventEmitter<Meal>;
  public meals: Meal[];
  public filterBy = "None";
  public filterLow = -1;
  public filterHigh = -1;
  public filterName = "All";
  constructor() {
    this.onMealSelect = new EventEmitter();
  }
  changeFilter(newFilter: string) {
    this.filterLow = -1;
    this.filterHigh = -1;
    this.filterName = "All";
    this.filterBy = newFilter;
  }
  setFilterName(newName: HTMLInputElement) {
    this.filterName = newName.value;
    newName.value="";
  }
  setFilterVals(newLow: HTMLInputElement, newHigh: HTMLInputElement) {
    this.filterLow = parseFloat(newLow.value===""?"0":newLow.value);
    this.filterHigh = parseFloat(newHigh.value===""?"2000":newHigh.value);
    newLow.value = "";
    newHigh.value = "";
  }
  emitMeal(meal: Meal) {
    this.onMealSelect.emit(meal);
  }
}
