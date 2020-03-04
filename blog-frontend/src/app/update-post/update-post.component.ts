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
  updatedpost: Post;
  constructor(private formBuilder: FormBuilder,
              private postService: PostService) {
  }

  ngOnInit() {
    this.updatedpost = JSON.parse(localStorage.getItem('post'));

    this.updatePostForm = this.formBuilder.group({
      title: [this.updatedpost.title, Validators.required],
      content: [this.updatedpost.content, Validators.required]
    });
  }

  updatePost() {

    const post = {
      title: this.updatePostForm.value.title,
      content: this.updatePostForm.value.content,
    }

    this.postService.updatePost(post, +this.updatedpost.id).subscribe(() => {
      console.log(this.updatedpost.id);
      this.updatePostForm.reset();
    }, (err) => console.log(err));
  }

}
