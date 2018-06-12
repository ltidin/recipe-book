import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {


constructor(private shoppingListService: ShoppingListService) { }
private recipes: Recipe[] = [
  new Recipe('Ziti', 'Italian baked ziti', 'https://images.media-allrecipes.com/userphotos/720x405/4557541.jpg',[new Ingredient('dry ziti pasta', 1), new Ingredient('mozzarella cheese, shredded', 6), new Ingredient('sour cream', 1.5)]),
  new Recipe('Big Smokey Burger', 'Burger', 'https://images.media-allrecipes.com/userphotos/720x405/1128661.jpg',[new Ingredient('ground beef sirloin', 2), new Ingredient('liquid smoke flavoring', 1), new Ingredient('hamburger buns', 6)]) 
];

getRecipes(){
  return this.recipes.slice();
}

getRecipe(id: number){
  return this.recipes[id];
}

addIngredientToShoppingList(ingredients: Ingredient[]){
    this.shoppingListService.addIngredients(ingredients);
  }
}

