import { Component } from '@angular/core';
import { DurationPipe } from '../../shared/pipes/duration.pipe';
import { PageHeadline } from '../../shared/components/page-headline/page-headline';

@Component({
  selector: 'app-forge',
  imports: [DurationPipe, PageHeadline],
  templateUrl: './forge.html',
  styleUrl: './forge.css',
})
export class Forge {
  fields: number[] = [...Array(8).keys()];
}
