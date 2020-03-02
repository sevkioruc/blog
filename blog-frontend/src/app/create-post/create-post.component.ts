import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PostService } from 'src/services/post.service';

@Component({
  selector: 'create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  createPostForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private postService: PostService) {
  }

  ngOnInit() {
    this.createPostForm = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required]
    });
  }

  createPost() {
    const post = {
      title: this.createPostForm.value.title,
      content: this.createPostForm.value.content,
    }

    this.postService.createPost(post).subscribe(() => {
      console.log(post);
    }, (err) => console.log(err));
  }

}
