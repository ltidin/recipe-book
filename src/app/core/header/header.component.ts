import { Store } from '@ngrx/store';
import { AuthService } from '../../authentication/auth.service';
import { HttpRequestsService } from '../../shared/http-requests.service';
import { Component, OnInit} from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import * as fromApp from '../../store/app.reducers';
import * as fromAuth from '../../authentication/store/auth.reducers';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  authState: Observable<fromAuth.State>;

  constructor(private httpService: HttpRequestsService,
              private authService: AuthService,
              private store: Store<fromApp.AppState>) { }
  
  
  ngOnInit() {
    this.authState = this.store.select('auth');
  }

// onSave() {
//   forkJoin(
//     this.httpService.storeRecipes(),
//     this.httpService.storeIngredients()
//   )
//   .subscribe(
//     ([response1, response2]) => {
//       console.log(response1);
//       console.log(response2);
//     },
//     ([error1, error2]) => {
//       console.log(error1);
//       console.log(error2);
//     }
//   );
// }


  // onFetch() {
  //   this.httpService.getRecipes();
  //   this.httpService.getIngredients();
  // }

  onLogout() {
    this.authService.logout();
  }
}
