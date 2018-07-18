import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCkZHKfRYxGrhOntqdewzITMWIUs9KcHW8',
      authDomain: 'ng-recipe-book-e1194.firebaseapp.com',
      databaseURL: 'https://ng-recipe-book-e1194.firebaseio.com',
      projectId: 'ng-recipe-book-e1194',
      storageBucket: 'ng-recipe-book-e1194.appspot.com',
      messagingSenderId: '830654067058'
    });
  }

}
