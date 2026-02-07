import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { PlayerQuestActions } from './quests.actions';
import { playerQuestFeature } from './quests.reducer';

@Injectable({
  providedIn: 'root',
})
export class PlayerQuestFacade {
  private store = inject(Store);

  public loadPlayerQuests(): void {
    this.store.dispatch(PlayerQuestActions.loadPlayerQuests());
  }

  public readonly playerQuests = this.store.selectSignal(
    playerQuestFeature.selectAll
  );
}
