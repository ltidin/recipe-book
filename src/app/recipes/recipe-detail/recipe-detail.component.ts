<<<<<<< HEAD
import { Recipe } from './../recipe.model';
import { Component, OnInit, Input } from '@angular/core';
=======
import { RecipeService } from './../recipe.service';
import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
>>>>>>> 67856705046967cb1225201861144355d770f19c

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
<<<<<<< HEAD
  @Input() recipe: Recipe;
  constructor() { }

  ngOnInit() {
  }

=======
  recipe: Recipe;
  id: number;
  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.recipe = this.recipeService.getRecipe(this.id);
      }
    );
  }
  onAddToRecipeList() {
    this.recipeService.addIngredientToShoppingList(this.recipe.ingredients)
  }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route})
  }

  onDeleteRecipe(id: number) {
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['../'], {relativeTo: this.route})
  }
>>>>>>> 67856705046967cb1225201861144355d770f19c
}
