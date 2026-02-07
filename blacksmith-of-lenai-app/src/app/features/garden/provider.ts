import { playerGardenFeature } from './state/garden.reducer';
import { provideState } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { playerGardenEffects } from './state/garden.effects';
import { EnvironmentProviders } from '@angular/core';

export function providePlayerGarden(): EnvironmentProviders[] {
  return [
    provideState(playerGardenFeature),
    provideEffects(playerGardenEffects),
  ];
}
