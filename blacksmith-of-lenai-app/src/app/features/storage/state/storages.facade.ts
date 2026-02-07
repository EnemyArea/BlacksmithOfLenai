import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { PlayerStorageActions } from './storages.actions';
import { playerStorageFeature } from './storages.reducer';

@Injectable({
  providedIn: 'root',
})
export class PlayerStorageFacade {
  private store = inject(Store);

  public loadPlayerStorages(): void {
    this.store.dispatch(PlayerStorageActions.loadPlayerStorages());
  }

  public readonly playerStorages = this.store.selectSignal(
    playerStorageFeature.selectAll
  );
}
