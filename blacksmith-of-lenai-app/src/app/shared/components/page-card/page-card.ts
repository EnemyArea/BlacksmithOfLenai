import { Component, input } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-page-card',
  imports: [NgTemplateOutlet],
  templateUrl: './page-card.html',
  styleUrl: './page-card.css',
})
export class PageCard {
  isCollapsible = input<boolean>();
}
