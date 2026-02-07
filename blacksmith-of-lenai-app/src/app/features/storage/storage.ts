import { Component, inject, OnInit } from '@angular/core';
import { PageHeadline } from '../../shared/components/page-headline/page-headline';
import { PageCard } from '../../shared/components/page-card/page-card';
import { ItemRenderer } from '../../shared/components/item-renderer/item-renderer';
import { StorageTabs } from './components/storage-tabs/storage-tabs';
import { StorageToolbar } from './components/storage-toolbar/storage-toolbar';
import { PlayerStorageFacade } from './state/storages.facade';

@Component({
  selector: 'app-storage',
  imports: [PageHeadline, PageCard, ItemRenderer, StorageTabs, StorageToolbar],
  templateUrl: './storage.html',
})
export class Storage implements OnInit {
  private playerStorageFacade = inject(PlayerStorageFacade);
  protected playerStorages = this.playerStorageFacade.playerStorages;

  public ngOnInit(): void {
    this.playerStorageFacade.loadPlayerStorages();
  }
}
