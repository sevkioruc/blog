import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class PostService { 
    
    private readonly baseUrl = 'http://127.0.0.1:8000/';

    constructor(private http: HttpClient) {

    }

    getPosts() {
        return this.http.get(this.baseUrl + 'api/post/list');
    }

    deletePost(id: number) {
        console.log(id);
        return this.http.delete(this.baseUrl + 'api/post/delete/' + id);
    }
}