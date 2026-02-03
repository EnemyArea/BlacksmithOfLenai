import { Component, input } from '@angular/core';

@Component({
  selector: 'app-page-sub-headline',
  imports: [],
  templateUrl: './page-sub-headline.html',
  styleUrl: './page-sub-headline.css',
})
export class PageSubHeadline {
  protected headline = input.required<string>();
}
