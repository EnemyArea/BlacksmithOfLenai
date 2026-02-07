import { createFeature, createReducer, createSelector, on } from '@ngrx/store';
import { PlayerGardenField } from './garden.models';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { PlayerGardenActions } from './garden.actions';
import { HttpErrorResponse } from '@angular/common/http';
import { sumBy } from '../../../shared/helper/linq';

export interface PlayerGardenState extends EntityState<PlayerGardenField> {
  isLoading: boolean;
  error: HttpErrorResponse | null;
  selectedPlayerGarden: PlayerGardenField | null;
}

export const adapter: EntityAdapter<PlayerGardenField> =
  createEntityAdapter<PlayerGardenField>({
    selectId: model => model.playerGardenFieldId,
  });

export const initialState: PlayerGardenState = adapter.getInitialState({
  isLoading: false,
  error: null,
  selectedPlayerGarden: null,
});

export const playerGardenFeature = createFeature({
  name: 'playerGarden',
  reducer: createReducer(
    initialState,

    on(PlayerGardenActions.loadPlayerGardens, state => ({
      ...state,
      isLoading: true,
    })),

    on(
      PlayerGardenActions.loadPlayerGardensSuccess,
      (state: PlayerGardenState, { playerGardenFields }) =>
        adapter.setAll(playerGardenFields, {
          ...state,
          isLoading: false,
        })
    ),

    on(
      PlayerGardenActions.loadPlayerGardensFailure,
      (state: PlayerGardenState, { error }) => ({
        ...state,
        error: error,
        isLoading: false,
      })
    )
  ),
  extraSelectors: ({ selectPlayerGardenState }) => {
    const { selectAll } = adapter.getSelectors(selectPlayerGardenState);

    return {
      selectAll,
      selectMaxEnergyCostsHarvest: createSelector(selectAll, fields =>
        sumBy(fields, x => x.gardenCrop?.energyCostsHarvest ?? 0)
      ),
      selectMaxEnergyCostsReplant: createSelector(selectAll, fields =>
        sumBy(fields, x => x.gardenCrop?.energyCostsReplant ?? 0)
      ),
      selectMaxEnergyCostsIrrigation: createSelector(selectAll, fields =>
        sumBy(fields, x => x.gardenCrop?.energyCostsIrrigation ?? 0)
      ),
      selectMaxEnergyCostsFertilize: createSelector(selectAll, fields =>
        sumBy(fields, x => x.gardenCrop?.energyCostsFertilize ?? 0)
      ),
    };
  },
});
