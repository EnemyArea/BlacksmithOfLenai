import { Actions, createEffect, ofType } from '@ngrx/effects';
import { inject } from '@angular/core';
import { PlayerQuestActions } from './quests.actions';
import { catchError, map, of, switchMap } from 'rxjs';
import { PlayerService } from '../../../api-generated';
import { mapPlayerQuests } from './quests.mapper';

export const loadPlayerQuests = createEffect(
  (actions = inject(Actions), playerService = inject(PlayerService)) => {
    return actions.pipe(
      ofType(PlayerQuestActions.loadPlayerQuests),
      switchMap(() =>
        playerService.apiPlayerQuestsGet().pipe(
          map(quests =>
            PlayerQuestActions.loadPlayerQuestsSuccess({
              playerQuests: mapPlayerQuests(quests),
            })
          ),
          catchError(error =>
            of(PlayerQuestActions.loadPlayerQuestsFailure({ error }))
          )
        )
      )
    );
  },
  { functional: true }
);

export const playerQuestEffects = { loadPlayerQuests };
