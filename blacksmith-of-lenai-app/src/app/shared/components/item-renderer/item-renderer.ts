import { Component, input } from '@angular/core';
import { ItemData } from '../../models/item-data';

@Component({
  selector: 'app-item-renderer',
  imports: [],
  templateUrl: './item-renderer.html',
  styleUrl: './item-renderer.css',
})
export class ItemRenderer {
  protected itemData = input.required<ItemData | undefined>();
  protected itemCount = input.required<number>();
}
