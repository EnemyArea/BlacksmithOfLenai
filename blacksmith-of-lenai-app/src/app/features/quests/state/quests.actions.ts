import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';
import { PlayerQuest } from './quests.models';

export const PlayerQuestActions = createActionGroup({
  source: 'playerQuest',
  events: {
    LoadPlayerQuests: emptyProps(),
    LoadPlayerQuestsSuccess: props<{
      playerQuests: PlayerQuest[];
    }>(),
    loadPlayerQuestsFailure: props<{
      error: HttpErrorResponse;
    }>(),
  },
});
