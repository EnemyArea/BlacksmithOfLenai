import { ItemData } from '../../../shared/models/item-data';

export interface PlayerStorage {
  playerStorageId: string;
  items: PlayerStorageItem[];
}

export interface PlayerStorageItem {
  storageItemId: string;
  itemCount: number;
  itemData: ItemData;
}
