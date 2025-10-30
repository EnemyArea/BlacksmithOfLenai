import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-collapsible-teaser',
  imports: [],
  templateUrl: './collapsible-teaser.html',
  styleUrl: './collapsible-teaser.css',
})
export class CollapsibleTeaser {
  @Input() teaserTitle = '';
  @Input() teaserText = '';
  @Input() teaserFigure = '';
}
