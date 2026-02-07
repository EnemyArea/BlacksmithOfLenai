import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { PlayerSkillActions } from './skills.actions';
import { playerSkillFeature } from './skills.reducer';

@Injectable({
  providedIn: 'root',
})
export class PlayerSkillFacade {
  private store = inject(Store);

  public loadPlayerSkills(): void {
    this.store.dispatch(PlayerSkillActions.loadPlayerSkills());
  }

  public readonly playerSkills = this.store.selectSignal(
    playerSkillFeature.selectAll
  );
}
