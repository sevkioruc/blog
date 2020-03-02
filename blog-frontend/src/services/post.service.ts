import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from 'src/models/post.model';

@Injectable({providedIn: 'root'})
export class PostService { 
    
    private readonly baseUrl = 'http://127.0.0.1:8000/';

    constructor(private http: HttpClient) {
    }

    getPosts() {
        return this.http.get(this.baseUrl + 'api/post/list');
    }

    deletePost(id: number) {
        return this.http.delete(this.baseUrl + 'api/post/delete/' + id);
    }

    createPost(post: Post) {
        return this.http.post(this.baseUrl + 'api/post/create', post);
    }

}
