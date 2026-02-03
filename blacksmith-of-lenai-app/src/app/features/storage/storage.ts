import { Component, inject, signal, OnInit } from '@angular/core';
import { PageHeadline } from '../../shared/components/page-headline/page-headline';
import { PageCard } from '../../shared/components/page-card/page-card';
import { ItemRenderer } from '../../shared/components/item-renderer/item-renderer';
import { StorageTabs } from './components/storage-tabs/storage-tabs';
import { StorageToolbar } from './components/storage-toolbar/storage-toolbar';
import { PlayerService } from '../../core/services/player-service';
import { PlayerStorage } from '../../shared/models/player-storage';

@Component({
  selector: 'app-storage',
  imports: [PageHeadline, PageCard, ItemRenderer, StorageTabs, StorageToolbar],
  templateUrl: './storage.html',
  styleUrl: './storage.css',
})
export class Storage implements OnInit {
  private _playerService = inject(PlayerService);
  protected playerStorages = signal<PlayerStorage[]>([]);

  public ngOnInit(): void {
    this.playerStorages.set(this._playerService.getPlayerStorages());
  }
}
