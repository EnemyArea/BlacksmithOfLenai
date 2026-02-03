import { Component, input } from '@angular/core';

@Component({
  selector: 'app-collapsible-teaser',
  imports: [],
  templateUrl: './collapsible-teaser.html',
  styleUrl: './collapsible-teaser.css',
})
export class CollapsibleTeaser {
  protected teaserTitle = input.required<string>();
  protected teaserText = input.required<string>();
  protected teaserFigure = input.required<string>();
}
