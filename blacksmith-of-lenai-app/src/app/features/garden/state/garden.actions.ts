import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { PlayerGardenField } from './garden.models';
import { HttpErrorResponse } from '@angular/common/http';

export const PlayerGardenActions = createActionGroup({
  source: 'playerGarden',
  events: {
    LoadPlayerGarden: emptyProps(),
    LoadPlayerGardenSuccess: props<{
      playerGardenFields: PlayerGardenField[];
    }>(),
    loadPlayerGardenFailure: props<{
      error: HttpErrorResponse;
    }>(),
  },
});
