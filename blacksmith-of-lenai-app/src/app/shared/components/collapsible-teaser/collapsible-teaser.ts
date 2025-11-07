import { Component, input } from '@angular/core';

@Component({
  selector: 'app-collapsible-teaser',
  imports: [],
  templateUrl: './collapsible-teaser.html',
  styleUrl: './collapsible-teaser.css',
})
export class CollapsibleTeaser {
  teaserTitle = input.required<string>();
  teaserText = input.required<string>();
  teaserFigure = input.required<string>();
}
