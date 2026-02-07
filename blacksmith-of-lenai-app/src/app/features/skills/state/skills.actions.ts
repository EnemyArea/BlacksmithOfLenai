import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';
import { PlayerSkill } from './skills.models';

export const PlayerSkillActions = createActionGroup({
  source: 'playerSkill',
  events: {
    LoadPlayerSkills: emptyProps(),
    LoadPlayerSkillsSuccess: props<{
      playerSkills: PlayerSkill[];
    }>(),
    loadPlayerSkillsFailure: props<{
      error: HttpErrorResponse;
    }>(),
  },
});
