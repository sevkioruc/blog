import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from 'src/services/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  userIsAuthenticated = false;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userIsAuthenticated = this.userService.getIsAuth();
    this.userService.getAuthStatusListener().subscribe(isAuth => {
      this.userIsAuthenticated = isAuth;
    });
  }

  onLogout() {
    this.userService.authListener.next(false);
    this.userService.logout();
  }

}
