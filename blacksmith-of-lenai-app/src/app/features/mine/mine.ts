import { Component } from '@angular/core';
import { PageHeadline } from '../../shared/components/page-headline/page-headline';
import { DurationPipe } from '../../shared/pipes/duration.pipe';
import { PageSubHeadline } from '../../shared/components/page-sub-headline/page-sub-headline';

@Component({
  selector: 'app-mine',
  imports: [PageHeadline, DurationPipe, PageSubHeadline],
  templateUrl: './mine.html',
  styleUrl: './mine.css',
})
export class Mine {
  fields: number[] = [...Array(9).keys()];
}
