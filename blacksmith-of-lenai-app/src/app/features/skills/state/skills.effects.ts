import { Actions, createEffect, ofType } from '@ngrx/effects';
import { inject } from '@angular/core';
import { PlayerSkillActions } from './skills.actions';
import { catchError, map, of, switchMap } from 'rxjs';
import { PlayerService } from '../../../api-generated';
import { mapPlayerSkills } from './skills.mapper';

export const loadPlayerSkills = createEffect(
  (actions = inject(Actions), playerService = inject(PlayerService)) => {
    return actions.pipe(
      ofType(PlayerSkillActions.loadPlayerSkills),
      switchMap(() =>
        playerService.apiPlayerSkillsGet().pipe(
          map(Skills =>
            PlayerSkillActions.loadPlayerSkillsSuccess({
              playerSkills: mapPlayerSkills(Skills),
            })
          ),
          catchError(error =>
            of(PlayerSkillActions.loadPlayerSkillsFailure({ error }))
          )
        )
      )
    );
  },
  { functional: true }
);

export const playerSkillEffects = { loadPlayerSkills };
