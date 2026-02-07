import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { PlayerGardenActions } from './garden.actions';
import { playerGardenFeature } from './garden.reducer';

@Injectable({
  providedIn: 'root',
})
export class PlayerGardenFacade {
  private store = inject(Store);

  public loadPlayerGardens(): void {
    this.store.dispatch(PlayerGardenActions.loadPlayerGardens());
  }

  public readonly playerGardenFields = this.store.selectSignal(
    playerGardenFeature.selectAll
  );

  public maxEnergyCostsHarvest = this.store.selectSignal(
    playerGardenFeature.selectMaxEnergyCostsHarvest
  );

  public maxEnergyCostsReplant = this.store.selectSignal(
    playerGardenFeature.selectMaxEnergyCostsReplant
  );

  public maxEnergyCostsIrrigation = this.store.selectSignal(
    playerGardenFeature.selectMaxEnergyCostsIrrigation
  );

  public maxEnergyCostsFertilize = this.store.selectSignal(
    playerGardenFeature.selectMaxEnergyCostsFertilize
  );
}
