import { User } from 'src/models/user.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class UserService {

    private readonly baseUrl = 'http://127.0.0.1:8000/';

    constructor(private http: HttpClient) {
    }
    
    register(user: User) {
        return this.http.post(this.baseUrl + 'api/user/register', user);
    }
}
