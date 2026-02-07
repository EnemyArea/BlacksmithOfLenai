import { Component, input } from '@angular/core';

@Component({
  selector: 'app-page-headline',
  imports: [],
  templateUrl: './page-headline.html',
})
export class PageHeadline {
  public readonly headline = input.required<string>();
}
