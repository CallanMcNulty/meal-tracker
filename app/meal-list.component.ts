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
    <div>
      <select (change)="changeFilter($event.target.value)">
        <option value="None">None</option>
        <option value="Name">Name</option>
        <option value="Calories">Calories</option>
        <option value="Protein">Protein</option>
        <option value="Lipids">Lipids</option>
        <option value="Carbohydrates">Carbohydrates</option>
      </select>
      <div *ngIf="filterBy==='Name'">
        <input placeholder="Name" #newName>
        <button (click)="setFilterName(newName)">Search</button>
      </div>
      <div *ngIf="!(filterBy==='Name' || filterBy==='None')">
        <input type="number" placeholder="Minimum Value" #newLow>
        <input type="number" placeholder="Maximum Value" #newHigh>
        <button (click)="setFilterVals(newLow, newHigh)">Search</button>
      </div>
      <meal-display *ngFor="#meal of meals | nameSearch:filterName | valueSearch:filterBy:filterLow:filterHigh"
        [meal]="meal"
        (onAddRemove)="emitMeal($event)">
      </meal-display>
    </div>
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
