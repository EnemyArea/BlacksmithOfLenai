import { ItemData } from './item-data';

export interface StorageItem {
  storageItemId: string;
  itemData: ItemData;
  itemCount: number;
}
