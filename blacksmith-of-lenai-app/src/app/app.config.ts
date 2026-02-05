import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideState, provideStore } from '@ngrx/store';
import { playerGardenFeature } from './features/garden/state/garden.reducer';
import { provideEffects } from '@ngrx/effects';
import { playerGardenEffects } from './features/garden/state/garden.effects';
import { provideApi } from './api-generated';
import { errorInterceptor } from './core/error-handling/error.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideHttpClient(withInterceptors([errorInterceptor])),
    provideApi('http://localhost:3000'),
    provideStore(),
    provideState(playerGardenFeature),
    provideEffects(playerGardenEffects),
  ],
};
