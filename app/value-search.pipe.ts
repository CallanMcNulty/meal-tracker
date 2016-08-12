import { Pipe } from 'angular2/core';
import { Meal } from './meal.model';

@Pipe({
  name: "valueSearch",
  pure: false
})
export class ValueSearchPipe {
  transform(input: Meal[], args) {
    var searchBy = args[0];
    var min = args[1];
    var max = args[2];
    if(searchBy==="Name" || searchBy==="None" || (min===-1 && max===-1)) {
      return input;
    }
    if(searchBy==="Calories") {
      return input.filter((meal) => {
        return min < meal.calories && meal.calories < max;
      });
    } else if(searchBy==="Protein") {
      return input.filter((meal) => {
        return min < meal.protein && meal.protein < max;
      });
    } else if(searchBy==="Lipids") {
      return input.filter((meal) => {
        return min < meal.lipids && meal.lipids < max;
      });
    } else if(searchBy==="Carbohydrates") {
      return input.filter((meal) => {
        return min < meal.carbs && meal.carbs < max;
      });
    }
  }
}
