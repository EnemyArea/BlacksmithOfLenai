import { Component, input } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-page-card',
  imports: [NgTemplateOutlet],
  templateUrl: './page-card.html',
})
export class PageCard {
  public readonly isCollapsible = input<boolean>();
}
