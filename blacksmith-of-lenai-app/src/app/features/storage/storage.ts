import { Component, inject, OnInit, computed } from '@angular/core';
import { PageHeadline } from '../../shared/components/page-headline/page-headline';
import { PageCard } from '../../shared/components/page-card/page-card';
import { ItemRenderer } from '../../shared/components/item-renderer/item-renderer';
import { StorageTabs } from './components/storage-tabs/storage-tabs';
import { StorageToolbar } from './components/storage-toolbar/storage-toolbar';
import { PlayerService } from '../../core/services/player-service';

@Component({
  selector: 'app-storage',
  imports: [PageHeadline, PageCard, ItemRenderer, StorageTabs, StorageToolbar],
  templateUrl: './storage.html',
  styleUrl: './storage.css',
})
export class Storage implements OnInit {
  private _playerService = inject(PlayerService);
  protected playerStorages = computed(() =>
    this._playerService.getPlayerStorages()
  );

  ngOnInit() {
    this._playerService.loadPlayerStorage();
  }
}
