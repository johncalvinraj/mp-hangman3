import { Routes } from '@angular/router';
import { Intro } from './modules/intro/intro';
import { SinglePlayer } from './modules/single-player/single-player';

export const routes: Routes = [
  {
    path: 'single',
    component: SinglePlayer
  },
  {
    path: '',
    component: Intro
  }
];
