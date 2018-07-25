import { AuthService } from '../../authentication/auth.service';
import { HttpRequestsService } from '../../shared/http-requests.service';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducers';
import * as fromAuthState from '../../authentication/store/auth.reducers';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit, OnDestroy {
  recipes: Recipe[] = [];
  subscription: Subscription;
  authenticated = this.store.select('auth').pipe(
    map(
      (authState: fromAuthState.State) => {
        return authState.authenticated;
      }
    )
  );

  constructor(private recipeService: RecipeService,
              private router: Router,
              private route: ActivatedRoute,
              private http: HttpRequestsService,
              private authService: AuthService,
              private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    // if () {
      this.http.getRecipes();
      this.recipes = this.recipeService.getRecipes();
      console.log('int');
      this.subscription = this.recipeService.recipesChanged
        .subscribe(
          (recipes) => {
            this.recipes = recipes;
          }
        );
    // } else {
    //     this.router.navigate(['../signin'], {relativeTo: this.route});
    //   }
  }
  onNewRecipeAdd() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
