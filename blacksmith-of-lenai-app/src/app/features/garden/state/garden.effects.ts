import { Actions, createEffect, ofType } from '@ngrx/effects';
import { inject } from '@angular/core';
import { PlayerGardenActions } from './garden.actions';
import { catchError, map, of, switchMap } from 'rxjs';
import { PlayerService } from '../../../api-generated';
import { mapPlayerGardenFields } from './garden.mapper';

export const loadPlayerGardens = createEffect(
  (actions = inject(Actions), playerService = inject(PlayerService)) => {
    return actions.pipe(
      ofType(PlayerGardenActions.loadPlayerGardens),
      switchMap(() =>
        playerService.apiPlayerGardensGet().pipe(
          map(fields =>
            PlayerGardenActions.loadPlayerGardensSuccess({
              playerGardenFields: mapPlayerGardenFields(fields),
            })
          ),
          catchError(error =>
            of(PlayerGardenActions.loadPlayerGardensFailure({ error }))
          )
        )
      )
    );
  },
  { functional: true }
);

export const playerGardenEffects = { loadPlayerGardens };
