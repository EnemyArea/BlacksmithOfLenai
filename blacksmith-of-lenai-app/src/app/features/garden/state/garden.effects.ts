import { Actions, createEffect, ofType } from '@ngrx/effects';
import { inject } from '@angular/core';
import { PlayerGardenActions } from './garden.actions';
import { catchError, map, of, switchMap } from 'rxjs';
import { DefaultService } from '../../../api-generated';
import { mapPlayerGardenFields } from './garden.mapper';

export const loadPlayerGarden = createEffect(
  (actions = inject(Actions), gameService = inject(DefaultService)) => {
    return actions.pipe(
      ofType(PlayerGardenActions.loadPlayerGarden),
      switchMap(() =>
        gameService.playerGardenGet().pipe(
          map(fields =>
            PlayerGardenActions.loadPlayerGardenSuccess({
              playerGardenFields: mapPlayerGardenFields(fields),
            })
          ),
          catchError(error =>
            of(PlayerGardenActions.loadPlayerGardenFailure({ error }))
          )
        )
      )
    );
  },
  { functional: true }
);

export const playerGardenEffects = { loadPlayerGarden };
