import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor(private router: Router) { }

token: string;

signupUser(email: string, password: string) {
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(
      response => console.log(response)
    )
    .catch(
      error => console.log(error)
    );
}

signinUser(email: string, password: string) {
  firebase.auth().signInWithEmailAndPassword(email, password)
  .then(
    () => {
      this.router.navigate(['/recipes']);
      firebase.auth().currentUser.getIdToken()
        .then(
          (token: string) => this.token = token
        );
    }
  )
  .catch(
    error => console.error(error)
  );
}

getToken() {
  firebase.auth().currentUser.getIdToken()
  .then(
    (token: string) => this.token = token
  );
  return this.token;
}

isAuthenticated() {
  return this.token != null;
}

logout() {
  firebase.auth().signOut();
  this.token = null;
}

}
