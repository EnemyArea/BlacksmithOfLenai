import { Component, input } from '@angular/core';
import { ItemData } from '../../models/item-data';

@Component({
  selector: 'app-item-renderer',
  imports: [],
  templateUrl: './item-renderer.html',
  styleUrl: './item-renderer.css',
})
export class ItemRenderer {
  public readonly itemData = input.required<ItemData | undefined>();
  public readonly itemCount = input.required<number>();
}
