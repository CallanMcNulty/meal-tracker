import { Component } from 'angular2/core';
import { MealDisplayComponent } from './meal-display.component';
import { NameSearchPipe } from './name-search.pipe';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  inputs: ['meals'],
  directives: [MealDisplayComponent],
  pipes: [NameSearchPipe],
  template: `
    <div>
      <select (change)="changeFilter($event.target.value)">
        <option value="None">None</option>
        <option value="Name">Name</option>
        <option value="Calories">Calories</option>
        <option value="Protein">Protein</option>
        <option value="Lipids">Lipids</option>
        <option value="Carbs">Carbohydrates</option>
      </select>
      <div *ngIf="filterBy==='Name'">
        <input placeholder="Name" #newName>
        <button (click)="setFilterName(newName)">Search</button>
      </div>
      <meal-display *ngFor="#meal of meals | nameSearch:filterName"
        [meal]="meal">
      </meal-display>
    </div>
  `
})
export class MealListComponent {
  public meals: Meal[];
  public filterBy = "None";
  public filterLow = -1;
  public filterHigh = -1;
  public filterName = "All";
  changeFilter(newFilter: string) {
    this.filterName = "All";
    this.filterBy = newFilter;
  }
  setFilterName(newName: HTMLInputElement) {
    console.log(newName.value);
    this.filterName = newName.value;
  }
}
