import { Component, OnInit } from '@angular/core';
import { PostCardComponent } from "../../layouts/post-card/post-card.component";
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../../services/posts.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-single-category',
  standalone: true,
  imports: [PostCardComponent, CommonModule],
  templateUrl: './single-category.component.html',
  styleUrl: './single-category.component.scss'
})
export class SingleCategoryComponent implements OnInit {

postsArray:  Array<any> = [];
  categoryObject: any;
constructor(private route: ActivatedRoute, private postService: PostsService){}

  ngOnInit(): void {
    this.route.params.subscribe(val => {
      this.categoryObject = val;
    this.postService.loadCategoryPosts(val['id']).subscribe(post=>{
      this.postsArray = post;
    })
    })
  }

}
