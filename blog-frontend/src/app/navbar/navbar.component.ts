import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/services/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  userIsAuthenticated = false;

  private authListenerSubs: Subscription;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.authListenerSubs = this.userService
    .getAuthStatusListener()
    .subscribe(isAuth => {
      this.userIsAuthenticated = isAuth;
    });
  }

  onLogout() {
    this.userService.logout();
  }

  ngOnDestroy() {
    this.authListenerSubs.unsubscribe();
  }

}
