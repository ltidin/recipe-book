import { Ingredient } from './../shared/ingredient.model';
<<<<<<< HEAD
import { Injectable, EventEmitter } from '@angular/core';
=======
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
>>>>>>> 67856705046967cb1225201861144355d770f19c

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();
  private  ingredients: Ingredient[] = [
      new Ingredient('aplles', 5),
      new Ingredient('pork', 2),
      new Ingredient('not pork', 17)
  ];
  constructor() { }

  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  onAddIngredient(newIngredient: Ingredient) {
    this.ingredients.push(newIngredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
    }

  updateIngredients(index: number, updIngredient: Ingredient) {
    this.ingredients[index] = updIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1)
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  }
