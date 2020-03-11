import { User } from 'src/models/user.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class UserService {
    loginInfo = {username: String, password: String};
    private authStatusListener = new Subject<boolean>();

    private readonly baseUrl = 'http://127.0.0.1:8000/';

    constructor(private http: HttpClient,
                private router: Router) {
    }
    
    register(user: User) {
        return this.http.post(this.baseUrl + 'api/user/register', user);
    }

    login(loginInfo) {
        this.authStatusListener.next(true);
        return this.http.post(this.baseUrl + 'api/token/', loginInfo);
    }

    logout() {
        this.authStatusListener.next(false);
        localStorage.removeItem('token');
        this.router.navigate(['login']);
    }

    getAuthStatusListener() {
        return this.authStatusListener.asObservable();
    }
}
