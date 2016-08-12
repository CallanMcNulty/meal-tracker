import { Pipe } from 'angular2/core';
import { Meal } from './meal.model';

@Pipe({
  name: "nameSearch",
  pure: false
})
export class NameSearchPipe {
  transform(input: Meal[], args) {
    if(args[0]==="All") {
      return input;
    }
    return input.filter((meal) => {
      return meal.name.toLowerCase().includes(args[0].toLowerCase());
    });
  }
}
