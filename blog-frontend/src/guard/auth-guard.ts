import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router) {}
    canActivate() {
        if (!localStorage.getItem('token')) {
            this.router.navigate(['login']);
            return false;
        }
        return true;
    }
}