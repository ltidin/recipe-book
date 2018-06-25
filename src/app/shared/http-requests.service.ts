import { Recipe } from './../recipes/recipe.model';
import { RecipeService } from './../recipes/recipe.service';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Ingredient } from './ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestsService {

constructor(private http: Http,
            private recService: RecipeService,
            private slService: ShoppingListService) { }

  storeRecipes() {
    return this.http.put('https://ng-recipe-book-e1194.firebaseio.com/recipes.json', this.recService.getRecipes());
  }

  storeIngredients() {
    return this.http.put('https://ng-recipe-book-e1194.firebaseio.com/ingredients.json', this.slService.getIngredients());
  }

  getRecipes() {
    return this.http.get('https://ng-recipe-book-e1194.firebaseio.com/recipes.json')
      .subscribe(
        (response) => {
          const recipes: Recipe[] = response.json();
          this.recService.setRecipes(recipes);
        },
        (error) => {
          console.log(error.json());
        }
      );
  }

  getIngredients() {
    return this.http.get('https://ng-recipe-book-e1194.firebaseio.com/ingredients.json')
      .subscribe(
        (response) => {
          const ingredients: Ingredient[] = response.json();
          this.slService.setIngredients(ingredients);
        },
        (error) => {
          console.log(error);
        }
      )
  }

  
}
