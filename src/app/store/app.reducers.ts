import { ActionReducerMap } from "@ngrx/store";
import * as fromShoppingList from "../shopping-list/store/shopping-list.reducers";
import * as fromAuthentication from '../authentication/store/auth.reducers'


export interface AppState {
    shoppingList: fromShoppingList.State;
    auth:  fromAuthentication.State;
}

export const reducers: ActionReducerMap<AppState> = {
    shoppingList: fromShoppingList.shoppingListReducer,
    auth: fromAuthentication.authReducer
}
