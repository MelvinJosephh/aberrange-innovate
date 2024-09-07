import { Component, OnInit } from '@angular/core';
import { PostCardComponent } from "../../layouts/post-card/post-card.component";
import { CommentFormComponent } from "../../comments/comment-form/comment-form.component";
import { CommentListComponent } from "../../comments/comment-list/comment-list.component";
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../../services/posts.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-single-post',
  standalone: true,
  imports: [PostCardComponent, CommentFormComponent, CommentListComponent, CommonModule],
  templateUrl: './single-post.component.html',
  styleUrl: './single-post.component.scss'
})
export class SinglePostComponent implements OnInit{
  postData: any;
  similarPostArray: Array<any> = [];

  constructor(private route: ActivatedRoute, private postService: PostsService){}

  ngOnInit(): void {
    this.route.params.subscribe(val=>{

      this.postService.countViews(val['id']);
      this.postService.loadSinglePost(val['id']).subscribe((post: any)=>{
        this.postData = post;
        this.loadSimilarPost(this.postData.category.categoryId);
      })
    })

  }
loadSimilarPost(catId: any){
  this.postService.loadSimilarPosts(catId).subscribe(val=>{
    this.similarPostArray = val;
  });
}
}
