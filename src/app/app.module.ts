import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentFormComponent } from './comments/comment-form/comment-form.component';
import { CommentListComponent } from './comments/comment-list/comment-list.component';
import { CategoryNavbarComponent } from './layouts/category-navbar/category-navbar.component';
import { HeaderComponent } from './layouts/header/header.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { HomeComponent } from './pages/home/home.component';
import { SingleCategoryComponent } from './pages/single-category/single-category.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';
import { TermsAndConditionsComponent } from './pages/terms-and-conditions/terms-and-conditions.component';
import { SubscriptionFormComponent } from './subscription-form/subscription-form.component';
import { FooterComponent } from './layouts/footer/footer.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CommentFormComponent,
    CommentListComponent,
    CategoryNavbarComponent,
    HeaderComponent,
    FooterComponent,
    ContactUsComponent,
    HomeComponent,
    SingleCategoryComponent,
    SinglePostComponent,
    TermsAndConditionsComponent,
    SubscriptionFormComponent,
  ]
})
export class AppModule { }
