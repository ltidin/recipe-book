import * as ShoppingListActions from './shopping-list.actions';
import { Ingredient } from '../../shared/ingredient.model';


export interface State {
    ingredients: Ingredient[];
    editedIngredient: Ingredient;
    editedIngredientIndex: number;
}

const initialState: State = {
    ingredients: [
        new Ingredient('Apple', 5),
        new Ingredient('Apple', 6)
    ],
    editedIngredient: null,
    editedIngredientIndex: null
}

export function shoppingListReducer(state = initialState, action: ShoppingListActions.ShoppingListActions) {
    switch (action.type) {
        case ShoppingListActions.ADD_INGREDIENT:
            return {
                ...state,
                ingredients: [...state.ingredients, action.payload]
            };
        case ShoppingListActions.ADD_INGREDIENTS:
            return {
                ...state,
                ingredients: [...state.ingredients, ...action.payload]
            };
        case ShoppingListActions.UPDATE_INGREDIENTS: {
            const updatedIngredient = {
                ...state.editedIngredient,
                ...action.payload
            };
            const newIngredients = [...state.ingredients];
            newIngredients[state.editedIngredientIndex] = updatedIngredient;
            return {
                ...state,
                ingredients: newIngredients,
                editedIngredient: null,
                editedIngredientIndex: null
            };
        };
        case ShoppingListActions.DELETE_INGREDIENTS: {
            const oldIngredients = [...state.ingredients];
            oldIngredients.splice(state.editedIngredientIndex, 1);
            return {
                ...state,
                ingredients: oldIngredients,
                editedIngredient: null,
                editedIngredientIndex: null
            }
        };
        case ShoppingListActions.START_EDITING: {
            const editedIngredient = {...state.ingredients[action.payload]};
            return {
                ...state,
                editedIngredient: editedIngredient,
                editedIngredientIndex: action.payload
            };
        };
        case ShoppingListActions.STOP_EDITING: {
            return {
                ...state,
                editedIngredient: null,
                editedIngredientIndex: null
            }
        };
        default:
            return state;
    }  
}
