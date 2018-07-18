import { AuthService } from './../../authentication/auth.service';
import { HttpRequestsService } from './../../shared/http-requests.service';
import { Component, OnInit} from '@angular/core';
import { forkJoin } from 'rxjs';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private httpService: HttpRequestsService,
              private authService: AuthService) { }

  ngOnInit() {
  }

onSave() {
  forkJoin(
    this.httpService.storeRecipes(),
    this.httpService.storeIngredients()
  )
  .subscribe(
    ([response1, response2]) => {
      console.log(response1);
      console.log(response2);
    },
    ([error1, error2]) => {
      console.log(error1);
      console.log(error2);
    }
  );
}


  onFetch() {
    this.httpService.getRecipes();
    this.httpService.getIngredients();
  }

  onLogout() {
    this.authService.logout();
  }
}
