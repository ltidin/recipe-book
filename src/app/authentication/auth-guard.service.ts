import { map, take } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducers';
import * as fromAuthState from '../authentication/store/auth.reducers';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

constructor(private store: Store<fromApp.AppState>) { }

canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
  return this.store.select('auth').pipe(
    map((authState: fromAuthState.State) => {
      return authState.authenticated;
  })); 
}

}
