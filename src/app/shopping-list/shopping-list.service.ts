import { Ingredient } from './../shared/ingredient.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
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
    this.ingredientsChanged.next(this.ingredients.slice());
  }
  addIngredients(ingredients: Ingredient[]){
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
    }
  }
