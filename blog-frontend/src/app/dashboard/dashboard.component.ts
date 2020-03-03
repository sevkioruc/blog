import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/services/post.service';
import { Post } from 'src/models/post.model';
import { Router } from '@angular/router';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  posts: Post[] = [];

  constructor(private postService: PostService,
              private router: Router) { }

  ngOnInit() {
    this.getPosts();
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
    localStorage.setItem('postId', post.id.toString());
    this.router.navigate(['/update']);
  }

}
