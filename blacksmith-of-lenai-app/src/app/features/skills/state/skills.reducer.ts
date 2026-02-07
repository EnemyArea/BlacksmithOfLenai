import { createFeature, createReducer, on } from '@ngrx/store';
import { PlayerSkill } from './skills.models';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { PlayerSkillActions } from './skills.actions';
import { HttpErrorResponse } from '@angular/common/http';

export interface PlayerSkillState extends EntityState<PlayerSkill> {
  isLoading: boolean;
  error: HttpErrorResponse | null;
  selectedPlayerSkill: PlayerSkill | null;
}

export const adapter: EntityAdapter<PlayerSkill> =
  createEntityAdapter<PlayerSkill>({
    selectId: model => model.playerSkillId,
  });

export const initialState: PlayerSkillState = adapter.getInitialState({
  isLoading: false,
  error: null,
  selectedPlayerSkill: null,
});

export const playerSkillFeature = createFeature({
  name: 'playerSkill',
  reducer: createReducer(
    initialState,

    on(PlayerSkillActions.loadPlayerSkills, state => ({
      ...state,
      isLoading: true,
    })),

    on(
      PlayerSkillActions.loadPlayerSkillsSuccess,
      (state: PlayerSkillState, { playerSkills }) =>
        adapter.setAll(playerSkills, {
          ...state,
          isLoading: false,
        })
    ),

    on(
      PlayerSkillActions.loadPlayerSkillsFailure,
      (state: PlayerSkillState, { error }) => ({
        ...state,
        error: error,
        isLoading: false,
      })
    )
  ),
  extraSelectors: ({ selectPlayerSkillState }) => {
    const { selectAll } = adapter.getSelectors(selectPlayerSkillState);

    return {
      selectAll,
    };
  },
});
