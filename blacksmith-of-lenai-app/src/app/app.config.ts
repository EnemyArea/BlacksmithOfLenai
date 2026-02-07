import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { provideApi } from './api-generated';
import { errorInterceptor } from './core/error-handling/error.interceptor';
import { providePlayerGarden } from './features/garden/provider';
import { providePlayerQuests } from './features/quests/provider';
import { providePlayerSkills } from './features/skills/provider';
import { providePlayerStorages } from './features/storage/provider';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideHttpClient(withInterceptors([errorInterceptor])),
    provideApi('https://localhost:7290'),
    provideStore(),
    ...providePlayerGarden(),
    ...providePlayerQuests(),
    ...providePlayerSkills(),
    ...providePlayerStorages(),
  ],
};
