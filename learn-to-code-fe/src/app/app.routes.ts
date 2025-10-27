import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Lessons } from './lessons/lessons';
import { Signup } from './signup/signup';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'lessons', component: Lessons },
  { path: 'signup', component: Signup },
];
