import { AuthService } from '../../authentication/auth.service';
import { HttpRequestsService } from '../../shared/http-requests.service';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit, OnDestroy {
  recipes: Recipe[] = [];
  subscription: Subscription;

  constructor(private recipeService: RecipeService,
              private router: Router,
              private route: ActivatedRoute,
              private http: HttpRequestsService,
              private authService: AuthService) { }

  ngOnInit() {
    if (this.authService.isAuthenticated()) {
      this.http.getRecipes();
      this.recipes = this.recipeService.getRecipes();
      this.subscription = this.recipeService.recipesChanged
        .subscribe(
          (recipes) => {
            this.recipes = recipes;
          }
        );
    } else {
        this.router.navigate(['../signin'], {relativeTo: this.route});
      }
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
