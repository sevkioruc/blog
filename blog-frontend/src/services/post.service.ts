import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from 'src/models/post.model';

@Injectable({providedIn: 'root'})
export class PostService {
     
    private readonly baseUrl = 'http://127.0.0.1:8000/';
    private requestHeader: HttpHeaders;

    constructor(private http: HttpClient) {
        this.requestHeader = new HttpHeaders({ 
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
         });
    }

    getPosts() {
        return this.http.get(this.baseUrl + 'api/post/list', { headers: this.requestHeader });
    }

    deletePost(id: number) {
        return this.http.delete(this.baseUrl + 'api/post/delete/' + id, { headers: this.requestHeader });
    }

    createPost(post: Post) {
        return this.http.post(this.baseUrl + 'api/post/create', post, { headers: this.requestHeader });
    }

    updatePost(post: Post, id: number) {
        return this.http.put(this.baseUrl + 'api/post/update/' + id, post, { headers: this.requestHeader });
    }

}
