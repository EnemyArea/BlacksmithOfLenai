import { createFeature, createReducer, on } from '@ngrx/store';
import { PlayerQuest } from './quests.models';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { PlayerQuestActions } from './quests.actions';
import { HttpErrorResponse } from '@angular/common/http';

export interface PlayerQuestState extends EntityState<PlayerQuest> {
  isLoading: boolean;
  error: HttpErrorResponse | null;
  selectedPlayerQuest: PlayerQuest | null;
}

export const adapter: EntityAdapter<PlayerQuest> =
  createEntityAdapter<PlayerQuest>({
    selectId: model => model.playerQuestId,
  });

export const initialState: PlayerQuestState = adapter.getInitialState({
  isLoading: false,
  error: null,
  selectedPlayerQuest: null,
});

export const playerQuestFeature = createFeature({
  name: 'playerQuest',
  reducer: createReducer(
    initialState,

    on(PlayerQuestActions.loadPlayerQuests, state => ({
      ...state,
      isLoading: true,
    })),

    on(
      PlayerQuestActions.loadPlayerQuestsSuccess,
      (state: PlayerQuestState, { playerQuests }) =>
        adapter.setAll(playerQuests, {
          ...state,
          isLoading: false,
        })
    ),

    on(
      PlayerQuestActions.loadPlayerQuestsFailure,
      (state: PlayerQuestState, { error }) => ({
        ...state,
        error: error,
        isLoading: false,
      })
    )
  ),
  extraSelectors: ({ selectPlayerQuestState }) => {
    const { selectAll } = adapter.getSelectors(selectPlayerQuestState);

    return {
      selectAll,
    };
  },
});
