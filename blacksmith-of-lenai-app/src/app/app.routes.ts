import { Routes } from '@angular/router';
import { Environment } from './features/environment';
import { Waypoints } from './features/waypoints/waypoints';
import { Skills } from './features/skills/skills';
import { Home } from './features/home/home';
import { Garden } from './features/garden/garden';
import { Forge } from './features/forge/forge';
import { Mine } from './features/mine/mine';

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
    path: 'forge',
    component: Forge,
  },
  {
    path: 'mine',
    component: Mine,
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
