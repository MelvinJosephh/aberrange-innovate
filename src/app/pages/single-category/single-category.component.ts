import { Component } from '@angular/core';
import { PostCardComponent } from "../../layouts/post-card/post-card.component";

@Component({
  selector: 'app-single-category',
  standalone: true,
  imports: [PostCardComponent],
  templateUrl: './single-category.component.html',
  styleUrl: './single-category.component.scss'
})
export class SingleCategoryComponent {

}
