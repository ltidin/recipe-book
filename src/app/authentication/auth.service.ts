import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import * as AuthActions from './store/auth.actions';
import * as fromApp from '../store/app.reducers';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor(private router: Router, private store: Store<fromApp.AppState>) { }

token: string;

signupUser(email: string, password: string) {
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(
      user => {
        this.store.dispatch(new AuthActions.Signup());
      }
    )
    .catch(
      error => console.log(error)
    );
}

signinUser(email: string, password: string) {
  firebase.auth().signInWithEmailAndPassword(email, password)
  .then(
    () => {
      this.store.dispatch(new AuthActions.Signup());
      this.router.navigate(['/recipes']);
      firebase.auth().currentUser.getIdToken()
        .then(
          (token: string) => {
            this.store.dispatch(new AuthActions.SetToken(token));
          }
        );
    }
  )
  .catch(
    error => console.error(error)
  );
}

logout() {
  firebase.auth().signOut();
  this.store.dispatch(new AuthActions.Logout());
}

}
