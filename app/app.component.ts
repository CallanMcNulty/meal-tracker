import { Component } from 'angular2/core';
import { NewMealComponent } from './new-meal.component';
import { MealListComponent } from './meal-list.component';
import { DayDisplayComponent } from './day-display.component';
import { Meal } from './meal.model';
import { Day } from './day.model';

@Component({
  selector: 'app',
  directives: [NewMealComponent, MealListComponent, DayDisplayComponent],
  template: `
    <div class = "container">
      <h1>Meal Tracker</h1>
      <button (click)="toggleAddMeal()">{{addingMeal?"Done":"Add Meal"}}</button>
      <new-meal *ngIf="addingMeal"
        (onNewMealSubmit)="addMeal($event)">
      </new-meal>
      <br>
      <br>
      <h2>All Meals</h2>
      <meal-list
        [meals]='meals'
        (onMealSelect)='addMealToDay($event)'>
      </meal-list>
      <button (click)="cycleDay(false)"><</button>
      <h2>Day's Meals</h2>
      <button (click)="cycleDay(true)">></button>
      <day-display
        [day]="days[currentDayIndex]">
      </day-display>
    </div>
    `
})
export class AppComponent {
  public meals: Meal[];
  public addingMeal = false;
  public days: Day[];
  public currentDayIndex = 0;
  constructor() {
    this.meals = [
      new Meal("Egg", "1, boiled", 78, 6, 5, 0.6),
      new Meal("Banana", "1, medium sized", 105, 1.3, .4, 27),
      new Meal("Oatmeal", "1 cup, cooked", 158, 6, 3.2, 27)
    ];
    this.days = [
      new Day(),
      new Day(),
      new Day()
    ];
  }
  addMeal(meal) {
    this.meals.push(meal);
  }
  toggleAddMeal() {
    this.addingMeal = !this.addingMeal;
  }
  addMealToDay(meal: Meal) {
    this.days[this.currentDayIndex].meals.push(meal);
  }
  cycleDay(forward: boolean) {
    if(forward && this.currentDayIndex+1 < this.days.length) {
      this.currentDayIndex ++;
    }
    if(!forward && this.currentDayIndex-1 > -1) {
      this.currentDayIndex --;
    }
  }
}
