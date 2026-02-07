import { provideState } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { EnvironmentProviders } from '@angular/core';
import { playerStorageFeature } from './state/storages.reducer';
import { playerStorageEffects } from './state/storages.effects';

export function providePlayerStorages(): EnvironmentProviders[] {
  return [
    provideState(playerStorageFeature),
    provideEffects(playerStorageEffects),
  ];
}
