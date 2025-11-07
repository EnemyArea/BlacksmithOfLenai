import { Component, signal } from '@angular/core';
import { PageHeadline } from '../../shared/components/page-headline/page-headline';
import { PageCard } from '../../shared/components/page-card/page-card';
import { ItemRenderer } from '../../shared/components/item-renderer/item-renderer';
import { StorageItem } from '../../shared/models/storage-item';
import { ItemType } from '../../shared/enums/item-type';
import { StorageTabs } from './components/storage-tabs/storage-tabs';
import { StorageToolbar } from './components/storage-toolbar/storage-toolbar';

@Component({
  selector: 'app-storage',
  imports: [PageHeadline, PageCard, ItemRenderer, StorageTabs, StorageToolbar],
  templateUrl: './storage.html',
  styleUrl: './storage.css',
})
export class Storage {
  storageItems = signal<StorageItem[]>([
    {
      storageItemId: '142235a1-c9a0-4cc9-9c1a-c1ea9acb59fd',
      itemCount: 20,
      itemData: {
        itemId: '57b219ab-85e0-48aa-b77a-fe45794d7db2',
        itemName: 'Kupferbarren',
        itemIcon: 'blacksmith/25.png',
        itemType: ItemType.Commodities,
      },
    },
  ]);
}
