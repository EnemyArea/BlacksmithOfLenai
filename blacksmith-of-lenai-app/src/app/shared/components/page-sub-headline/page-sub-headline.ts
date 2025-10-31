import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-sub-headline',
  imports: [],
  templateUrl: './page-sub-headline.html',
  styleUrl: './page-sub-headline.css',
})
export class PageSubHeadline {
  @Input() headline = '';
}
