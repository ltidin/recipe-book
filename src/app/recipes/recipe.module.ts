import { SharedModule } from './../shared/shared.module';
import { RecipesItemComponent } from './recipes-list/recipes-item/recipes-item.component';
import { RecipeRoutingModule } from './recipes-routing.module';
import { CommonModule } from '@angular/common';
import { RecipesComponent } from './recipes.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { RecipesStartComponent } from './recipes-start/recipes-start.component';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        RecipesComponent,
        RecipesStartComponent,
        RecipesListComponent,
        RecipeEditComponent,
        RecipeDetailComponent,
        RecipesItemComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RecipeRoutingModule,
        SharedModule
    ]
})

export class RecipeModule { }
