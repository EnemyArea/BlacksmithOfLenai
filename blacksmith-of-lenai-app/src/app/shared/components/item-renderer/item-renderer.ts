import { Component, Input } from '@angular/core';
import { ItemData } from '../../models/item-data';

@Component({
  selector: 'app-item-renderer',
  imports: [],
  templateUrl: './item-renderer.html',
  styleUrl: './item-renderer.css',
})
export class ItemRenderer {
  @Input() itemData: ItemData | undefined;
  @Input() itemCount = 0;
}
