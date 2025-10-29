import { Icon } from 'flowbite-angular/icon';
import { barsFromLeft } from 'flowbite-angular/icon/outline/general';
import { cart } from 'flowbite-angular/icon/solid/e-commerce';
import {
  chartPie,
  drawSquare,
  inbox,
} from 'flowbite-angular/icon/solid/general';
import { users } from 'flowbite-angular/icon/solid/user';
import {
  provideFlowbiteSidebarState,
  Sidebar,
  SidebarContent,
  SidebarItem,
  SidebarToggle,
} from 'flowbite-angular/sidebar';

import { Component } from '@angular/core';
import { provideIcons } from '@ng-icons/core';

@Component({
  selector: 'app-home',
  imports: [Sidebar, SidebarContent, SidebarItem, SidebarToggle, Icon],
  providers: [
    provideIcons({ chartPie, inbox, users, cart, drawSquare, barsFromLeft }),
    provideFlowbiteSidebarState(),
  ],
  host: {
    class: 'flex flex-row h-full',
  },
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
