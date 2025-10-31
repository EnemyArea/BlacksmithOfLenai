import { Routes } from '@angular/router';
import { Environment } from './features/environment';
import { Waypoints } from './features/waypoints/waypoints';
import { Skills } from './features/skills/skills';
import { Home } from './features/home/home';
import { Garden } from './features/garden/garden';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'garden',
    component: Garden,
  },
  {
    path: 'environment',
    component: Environment,
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
