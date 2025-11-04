import { ItemType } from '../enums/item-type';

export interface ItemData {
  itemId: string;
  itemName: string;
  itemIcon: string;
  itemType: ItemType;
}
