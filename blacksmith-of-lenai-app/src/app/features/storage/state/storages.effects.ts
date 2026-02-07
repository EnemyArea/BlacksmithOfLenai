import { Actions, createEffect, ofType } from '@ngrx/effects';
import { inject } from '@angular/core';
import { PlayerStorageActions } from './storages.actions';
import { catchError, map, of, switchMap } from 'rxjs';
import { PlayerService } from '../../../api-generated';
import { mapPlayerStorages } from './storages.mapper';

export const loadPlayerStorages = createEffect(
  (actions = inject(Actions), playerService = inject(PlayerService)) => {
    return actions.pipe(
      ofType(PlayerStorageActions.loadPlayerStorages),
      switchMap(() =>
        playerService.apiPlayerStoragesGet().pipe(
          map(Storages =>
            PlayerStorageActions.loadPlayerStoragesSuccess({
              playerStorages: mapPlayerStorages(Storages),
            })
          ),
          catchError(error =>
            of(PlayerStorageActions.loadPlayerStoragesFailure({ error }))
          )
        )
      )
    );
  },
  { functional: true }
);

export const playerStorageEffects = { loadPlayerStorages };
