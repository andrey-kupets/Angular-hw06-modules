import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PostService} from '../../services/post.service';
import {Post} from '../../models/Post';

@Component({
  selector: 'app-full-post',
  templateUrl: './full-post.component.html',
  styleUrls: ['./full-post.component.css']
})
export class FullPostComponent implements OnInit {

  post: Post;
  postId: number;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private postService: PostService) {
    this.activatedRoute.params.subscribe(value => {
      this.post = this.router.getCurrentNavigation().extras.state as Post;
      // this.post = history.state;
      // console.log(this.router.getCurrentNavigation());
      // console.log(history.state);
    });
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(value => this.postId = +value.id);
    this.postService.getPostById(this.postId).subscribe(singlePost => this.post = singlePost);
  }

}