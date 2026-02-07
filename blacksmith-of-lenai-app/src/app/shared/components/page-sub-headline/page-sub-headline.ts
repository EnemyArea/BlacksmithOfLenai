import { Component, input } from '@angular/core';

@Component({
  selector: 'app-page-sub-headline',
  imports: [],
  templateUrl: './page-sub-headline.html',
})
export class PageSubHeadline {
  public readonly headline = input.required<string>();
}
