import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from 'src/models/post.model';
import { UserService } from './user.service';

@Injectable({providedIn: 'root'})
export class PostService {
     
    private readonly baseUrl = 'http://127.0.0.1:8000/';
    private requestHeader: HttpHeaders;

    constructor(private http: HttpClient) {
    }

    getPosts() {
    this.requestHeader = new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
        });
        return this.http.get(this.baseUrl + 'api/post/list', { headers: this.requestHeader });
    }

    deletePost(id: number) {
    this.requestHeader = new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
        });
        return this.http.delete(this.baseUrl + 'api/post/delete/' + id, { headers: this.requestHeader });
    }

    createPost(post: Post) {
    this.requestHeader = new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
            });
        return this.http.post(this.baseUrl + 'api/post/create', post, { headers: this.requestHeader });
    }

    updatePost(post: Post, id: number) {
    this.requestHeader = new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
        });
        return this.http.put(this.baseUrl + 'api/post/update/' + id, post, { headers: this.requestHeader });
    }

}
