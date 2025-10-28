import {Routes} from '@angular/router';
import {Home} from './features/home';
import {Users} from './features/users';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'users',
    component: Users,
  }
];
