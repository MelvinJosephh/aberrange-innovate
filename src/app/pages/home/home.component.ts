import { Component, OnInit } from '@angular/core';
import { PostCardComponent } from "../../layouts/post-card/post-card.component";
import { PostsService } from '../../services/posts.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PostCardComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  featuredPostsArray: Array<any> = []; 
  latestPostArray: Array<any> = [];

constructor(private postService: PostsService){
this.postService.loadFeaturedData().subscribe(val=> {
  this.featuredPostsArray= val;
});
this.postService.loadLatest().subscribe(val=>{
this.latestPostArray = val;
});
}
  ngOnInit(): void {
   
  }


}
