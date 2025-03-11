import { Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { PostListComponentComponent } from './post-list-component/post-list-component.component';
import { PostDetailComponentComponent } from './post-detail-component/post-detail-component.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
import { AboutComponentComponent } from './about-component/about-component.component';

export const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: 'home', component: HomeComponentComponent },
  { path: 'posts', component: PostListComponentComponent },
  { path: 'posts/:id', component: PostDetailComponentComponent },
  { path: 'about', component: AboutComponentComponent },
  { path: '**', component: NotFoundComponentComponent }
];