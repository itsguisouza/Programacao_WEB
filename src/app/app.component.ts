import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { PostListComponentComponent } from './post-list-component/post-list-component.component';
import { PostDetailComponentComponent } from './post-detail-component/post-detail-component.component';
import { AboutComponentComponent } from './about-component/about-component.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';


@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HomeComponentComponent,
    PostListComponentComponent,
    PostDetailComponentComponent,
    AboutComponentComponent,
    NotFoundComponentComponent,
    RouterLink
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Aula3';
}
