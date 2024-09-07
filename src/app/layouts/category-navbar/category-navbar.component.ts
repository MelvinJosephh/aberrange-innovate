import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../services/categories.service';
import { CommonModule } from '@angular/common';
import { CategoryWithId } from '../../models/category';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-category-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './category-navbar.component.html',
  styleUrl: './category-navbar.component.scss'
})
export class CategoryNavbarComponent implements OnInit {

  categoryArray: CategoryWithId[] = [];


constructor (private categoryService: CategoriesService) {}

  ngOnInit(): void {
    this.categoryService.loadData().subscribe(val => {
      this.categoryArray = val;
    })
  }








}
