import { Recipe } from './recipe.model';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

recipeSelected = new EventEmitter<Recipe>();

constructor() { }
private recipes: Recipe[] = [
  new Recipe('burger', 'tasty'), 
  new Recipe(),
  new Recipe(),
  new Recipe(),
  new Recipe(),
];

getRecipe(){
  return this.recipes.slice();
}

}
