import { Component, input } from '@angular/core';

@Component({
  selector: 'app-collapsible-teaser',
  imports: [],
  templateUrl: './collapsible-teaser.html',
  styleUrl: './collapsible-teaser.css',
})
export class CollapsibleTeaser {
  public readonly teaserTitle = input.required<string>();
  public readonly teaserText = input.required<string>();
  public readonly teaserFigure = input.required<string>();
}
