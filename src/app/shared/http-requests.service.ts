import { Recipe } from './../recipes/recipe.model';
import { RecipeService } from './../recipes/recipe.service';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Ingredient } from './ingredient.model';
import { AuthService } from '../authentication/auth.service';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestsService {

constructor(private http: Http,
            private recService: RecipeService,
            private slService: ShoppingListService,
            private authService: AuthService) { }

  storeRecipes() {
    return this.http.put('https://ng-recipe-book-e1194.firebaseio.com/recipes.json', this.recService.getRecipes());
  }

  storeIngredients() {
    return this.http.put('https://ng-recipe-book-e1194.firebaseio.com/ingredients.json', this.slService.getIngredients());
  }

  getRecipes() {
    const token = this.authService.getToken();
    return this.http.get('https://ng-recipe-book-e1194.firebaseio.com/recipes.json?auth=' + token)
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
    const token = this.authService.getToken();
    return this.http.get('https://ng-recipe-book-e1194.firebaseio.com/ingredients.json?auth=' + token)
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
