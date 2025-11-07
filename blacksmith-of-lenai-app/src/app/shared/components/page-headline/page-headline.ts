import { Component, input } from '@angular/core';

@Component({
  selector: 'app-page-headline',
  imports: [],
  templateUrl: './page-headline.html',
  styleUrl: './page-headline.css',
})
export class PageHeadline {
  headline = input.required<string>();
}
