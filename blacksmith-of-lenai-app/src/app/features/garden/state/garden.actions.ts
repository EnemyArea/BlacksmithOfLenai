import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { PlayerGardenField } from './garden.models';
import { HttpErrorResponse } from '@angular/common/http';

export const PlayerGardenActions = createActionGroup({
  source: 'playerGarden',
  events: {
    LoadPlayerGardens: emptyProps(),
    LoadPlayerGardensSuccess: props<{
      playerGardenFields: PlayerGardenField[];
    }>(),
    loadPlayerGardensFailure: props<{
      error: HttpErrorResponse;
    }>(),

    IrrigateField: props<{ playerGardenFieldId: string }>(),
    IrrigateFieldSuccess: props<{ field: PlayerGardenField }>(),
    IrrigateFieldFailure: props<{ error: HttpErrorResponse }>(),
  },
});
