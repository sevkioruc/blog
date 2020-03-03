import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PostService } from 'src/services/post.service';
import { Post } from 'src/models/post.model';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})
export class UpdatePostComponent implements OnInit {

  updatePostForm: FormGroup;
  post: Post;
  constructor(private formBuilder: FormBuilder,
              private postService: PostService) {
  }

  ngOnInit() {
    this.updatePostForm = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required]
    });
  }

  updatePost() {
    const postId = localStorage.getItem('postId');

    const post = {
      title: this.updatePostForm.value.title,
      content: this.updatePostForm.value.content,
    }

    this.postService.updatePost(post, +postId).subscribe(() => {
      this.updatePostForm.reset();
    }, (err) => console.log(err));
  }

}
