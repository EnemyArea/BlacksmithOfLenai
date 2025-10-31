import { Component } from '@angular/core';
import { DurationPipe } from '../../shared/pipes/duration.pipe';
import { PageHeadline } from '../../shared/components/page-headline/page-headline';

@Component({
  selector: 'app-garden',
  imports: [DurationPipe, PageHeadline],
  templateUrl: './garden.html',
  styleUrl: './garden.css',
})
export class Garden {
  fields: number[] = [...Array(8).keys()];
}
