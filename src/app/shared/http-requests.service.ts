import { HttpClient, HttpParams, HttpRequest } from '@angular/common/http';
import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../recipes/recipe.service';
import { Injectable } from '@angular/core';
import { Ingredient } from './ingredient.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestsService {

constructor(private httpClient: HttpClient,
            private recService: RecipeService) { }

  storeRecipes() {
    const req = new HttpRequest('PUT', 'https://ng-recipe-book-e1194.firebaseio.com/recipes.json', this.recService.getRecipes(), {
    });
    return this.httpClient.request(req);
  }

  // storeIngredients() {
  //   return this.httpClient.put('https://ng-recipe-book-e1194.firebaseio.com/ingredients.json',
  //     this.slService.getIngredients());
  // }

  getRecipes() {
    return this.httpClient.get<Recipe[]>('https://ng-recipe-book-e1194.firebaseio.com/recipes.json')
      .pipe(map(recipes => {
        for (const recipe of recipes) {
          if (!recipe['ingredients']) {
            recipe['ingredients'] = [];
          }
        }
        return recipes;
      }))
      .subscribe(
        (recipes) => {
          this.recService.setRecipes(recipes);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  // getIngredients() {
  //   return this.httpClient.get<Ingredient[]>('https://ng-recipe-book-e1194.firebaseio.com/ingredients.json')
  //     .subscribe(
  //       (ingredients) => {
  //         this.slService.setIngredients(ingredients);
  //       },
  //       (error) => {
  //         console.log(error);
  //       }
  //     );
  // }
}
