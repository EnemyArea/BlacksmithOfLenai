import { provideState } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { EnvironmentProviders } from '@angular/core';
import { playerSkillFeature } from './state/skills.reducer';
import { playerSkillEffects } from './state/skills.effects';

export function providePlayerSkills(): EnvironmentProviders[] {
  return [provideState(playerSkillFeature), provideEffects(playerSkillEffects)];
}
