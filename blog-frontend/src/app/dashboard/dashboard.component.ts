import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/services/post.service';
import { Post } from 'src/models/post.model';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  getPosts() {
    this.postService.getPosts().subscribe((posts: Post[]) => {
      console.log(posts);
    });
  }

}
