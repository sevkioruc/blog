import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/services/post.service';
import { Post } from 'src/models/post.model';
import { Router } from '@angular/router';
import { UserService } from 'src/services/user.service';
import { User } from 'src/models/user.model';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  posts: Post[] = [];
  activeUserId: number;

  constructor(private postService: PostService,
              private userService: UserService,
              private router: Router) { }

  ngOnInit() {
    this.getPosts();

    const username = localStorage.getItem('username');
    this.userService.getCurrentUser(username).subscribe((user: User) => {
      this.activeUserId = user.id;
    })
  }

  getPosts() {
    this.postService.getPosts().subscribe((posts: Post[]) => {
      this.posts = posts;
    });
  }

  deletePost(post: Post) {
    this.postService.deletePost(post.id).subscribe(() => {
      const index = this.posts.findIndex((p) => p.id === post.id);
      if (index !== -1) {
        this.posts.splice(index, 1);
      } 
    }, () => {
      console.log('Could not delete');
    });
  }

  updatePost(post: Post) {
    localStorage.setItem('post', JSON.stringify(post));
    this.router.navigate(['/update']);
  }

  isOwner(postOwnerId: number) {
    return this.activeUserId === postOwnerId;
  }

}
