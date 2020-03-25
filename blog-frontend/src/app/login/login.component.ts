import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private router: Router) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    const loginInfo = {
      'username': this.loginForm.value.username,
      'password': this.loginForm.value.password
    }

    this.userService.login(loginInfo).subscribe((token: {'refresh': string, 'access': string }) => {
      if(token) {
        this.userService.tokenSub.next(token.access);
        this.userService.authListener.next(true);
        localStorage.setItem('token',token.access);
        localStorage.setItem('username', this.loginForm.value.username);
        this.router.navigate(['dashboard']);
      }
    });
  }
}
