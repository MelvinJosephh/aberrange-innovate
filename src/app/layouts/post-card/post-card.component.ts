import { Component, Input, OnInit } from '@angular/core';
import { PostWithId } from '../../models/post';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-post-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.css'
})
export class PostCardComponent implements OnInit{
  
  constructor(){}


  @Input() postData: PostWithId | undefined;
  
  ngOnInit(): void {
    console.log(this.postData);
  }

}
