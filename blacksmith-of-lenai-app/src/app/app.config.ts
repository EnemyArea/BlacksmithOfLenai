import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {
  provideFlowbiteSidebarConfig,
  provideFlowbiteSidebarContentConfig,
} from 'flowbite-angular/sidebar';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFlowbiteSidebarConfig({
      customTheme: {
        host: {
          base: 'fixed inset-0 top-0 left-0 z-40 h-screen lg:w-64',
          transition: '',
          open: {
            on: 'w-0',
            off: 'w-0',
          },
        },
      },
    }),
    provideFlowbiteSidebarContentConfig({
      customTheme: {
        host: {
          open: {
            on: 'w-screen fixed lg:w-64 translate-x-0 lg:relative',
            off: 'lg:w-64 -translate-x-full',
          },
        },
      },
    }),
  ],
};
