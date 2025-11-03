import { Component, Input } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-page-card',
  imports: [NgTemplateOutlet],
  templateUrl: './page-card.html',
  styleUrl: './page-card.css',
})
export class PageCard {
  @Input() isCollapsible = false;
}
