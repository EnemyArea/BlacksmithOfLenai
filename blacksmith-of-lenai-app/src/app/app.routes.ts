import { Routes } from '@angular/router';
import { Home } from './features/home';
import { Waypoints } from './features/waypoints/waypoints';
import { Skills } from './features/skills/skills';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'waypoints',
    component: Waypoints,
  },
  {
    path: 'skills',
    component: Skills,
  },
];
