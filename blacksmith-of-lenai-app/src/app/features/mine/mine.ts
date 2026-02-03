import { Component } from '@angular/core';
import { PageHeadline } from '../../shared/components/page-headline/page-headline';
import { PageSubHeadline } from '../../shared/components/page-sub-headline/page-sub-headline';
import { JobType } from '../../shared/enums/job-type';
import { MineVeinCard } from './components/mine-vein-card/mine-vein-card';

@Component({
  selector: 'app-mine',
  imports: [PageHeadline, PageSubHeadline, MineVeinCard],
  templateUrl: './mine.html',
  styleUrl: './mine.css',
})
export class Mine {
  protected fields: number[] = [...Array(9).keys()];
  protected readonly JobType = JobType;
}
