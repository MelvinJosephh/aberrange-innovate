import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./layouts/header/header.component";
import { CategoryNavbarComponent } from "./layouts/category-navbar/category-navbar.component";
import { FooterComponent } from "./layouts/footer/footer.component";
import { PostCardComponent } from "./layouts/post-card/post-card.component";
import { SubscriptionFormComponent } from "./subscription-form/subscription-form.component";
import { HomeComponent } from "./pages/home/home.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, CategoryNavbarComponent, FooterComponent, PostCardComponent, SubscriptionFormComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'aberrange-innovate';
}
