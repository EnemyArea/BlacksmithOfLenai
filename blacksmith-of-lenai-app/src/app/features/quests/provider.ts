import { provideState } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { EnvironmentProviders } from '@angular/core';
import { playerQuestFeature } from './state/quests.reducer';
import { playerQuestEffects } from './state/quests.effects';

export function providePlayerQuests(): EnvironmentProviders[] {
  return [provideState(playerQuestFeature), provideEffects(playerQuestEffects)];
}
