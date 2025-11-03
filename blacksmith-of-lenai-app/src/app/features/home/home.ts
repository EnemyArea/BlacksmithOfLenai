import { Component } from '@angular/core';
import { PageHeadline } from '../../shared/components/page-headline/page-headline';
import { DurationPipe } from '../../shared/pipes/duration.pipe';

@Component({
  selector: 'app-home',
  imports: [PageHeadline, DurationPipe],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
