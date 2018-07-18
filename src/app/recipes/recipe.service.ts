import { Subject } from 'rxjs';
import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})


export class RecipeService {
recipesChanged = new Subject<Recipe[]>();

constructor(private shoppingListService: ShoppingListService) { }
private recipes: Recipe[] = [];

getRecipes() {
  return this.recipes.slice();
}

setRecipes(recipes: Recipe[]) {
  this.recipes = recipes;
  this.recipesChanged.next(this.recipes.slice());
}

getRecipe(id: number) {
  return this.recipes[id];
}

addIngredientToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

addRecipe(recipe: Recipe) {
  this.recipes.push(recipe);
  this.recipesChanged.next(this.recipes.slice());
}
updateRecipe(index: number, newRecipe: Recipe) {
  this.recipes[index] = newRecipe;
  this.recipesChanged.next(this.recipes.slice());
}
deleteRecipe(index: number) {
  this.recipes.splice(index, 1);
  this.recipesChanged.next(this.recipes.slice());
}
}

