import { createFeature, createReducer, on } from '@ngrx/store';
import { PlayerStorage } from './storages.models';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { PlayerStorageActions } from './storages.actions';
import { HttpErrorResponse } from '@angular/common/http';

export interface PlayerStorageState extends EntityState<PlayerStorage> {
  isLoading: boolean;
  error: HttpErrorResponse | null;
  selectedPlayerStorage: PlayerStorage | null;
}

export const adapter: EntityAdapter<PlayerStorage> =
  createEntityAdapter<PlayerStorage>({
    selectId: model => model.playerStorageId,
  });

export const initialState: PlayerStorageState = adapter.getInitialState({
  isLoading: false,
  error: null,
  selectedPlayerStorage: null,
});

export const playerStorageFeature = createFeature({
  name: 'playerStorage',
  reducer: createReducer(
    initialState,

    on(PlayerStorageActions.loadPlayerStorages, state => ({
      ...state,
      isLoading: true,
    })),

    on(
      PlayerStorageActions.loadPlayerStoragesSuccess,
      (state: PlayerStorageState, { playerStorages }) =>
        adapter.setAll(playerStorages, {
          ...state,
          isLoading: false,
        })
    ),

    on(
      PlayerStorageActions.loadPlayerStoragesFailure,
      (state: PlayerStorageState, { error }) => ({
        ...state,
        error: error,
        isLoading: false,
      })
    )
  ),
  extraSelectors: ({ selectPlayerStorageState }) => {
    const { selectAll } = adapter.getSelectors(selectPlayerStorageState);

    return {
      selectAll,
    };
  },
});
