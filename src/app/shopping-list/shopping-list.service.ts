import { Ingredient } from './../shared/ingredient.model';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  private  ingredients: Ingredient[] = [
      new Ingredient('aplles', 5),
      new Ingredient('pork', 2),
      new Ingredient('not pork', 17)
  ];
  constructor() { }

  getIngredients(){
    return this.ingredients.slice();
  };

  onAddIngredient(newIngredient: Ingredient){
    this.ingredients.push(newIngredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }



}
