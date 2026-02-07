import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';
import { PlayerStorage } from './storages.models';

export const PlayerStorageActions = createActionGroup({
  source: 'playerStorage',
  events: {
    LoadPlayerStorages: emptyProps(),
    LoadPlayerStoragesSuccess: props<{
      playerStorages: PlayerStorage[];
    }>(),
    loadPlayerStoragesFailure: props<{
      error: HttpErrorResponse;
    }>(),
  },
});
