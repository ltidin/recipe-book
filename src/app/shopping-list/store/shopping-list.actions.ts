import { Ingredient } from '../../shared/ingredient.model';
import { Action } from '@ngrx/store';

export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const ADD_INGREDIENTS = 'ADD_INGREDIENTS';
export const UPDATE_INGREDIENTS = 'UPDATE_INGREDIENTS';
export const DELETE_INGREDIENTS = 'DELETE_INGREDIENTS';
export const START_EDITING = 'START_EDITITNG';
export const STOP_EDITING = 'STOP_EDITITNG';

export class AddIngredient implements Action {
    readonly type = ADD_INGREDIENT;
    constructor(public payload: Ingredient) {}
}

export class AddIngredients implements Action {
    readonly type = ADD_INGREDIENTS;
    constructor(public payload: Ingredient[]) {}
}

export class UpdateIngredients implements Action {
    readonly type = UPDATE_INGREDIENTS;
    constructor(public payload: Ingredient) {}
}

export class DeleteIngredients implements Action {
    readonly type = DELETE_INGREDIENTS;
    constructor() {}
}

export class StartEditing implements Action {
    readonly type = START_EDITING;
    constructor(public payload: number) {}
}

export class StopEditing implements Action {
    readonly type = STOP_EDITING;
    constructor() {}
}


export type ShoppingListActions = AddIngredient | AddIngredients
                                  | UpdateIngredients | DeleteIngredients
                                  | StartEditing | StopEditing;
