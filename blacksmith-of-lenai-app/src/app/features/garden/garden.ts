import { Component } from '@angular/core';
import { PageHeadline } from '../../shared/components/page-headline/page-headline';
import { JobType } from '../../shared/enums/job-type';
import { CropCard } from './components/crop-card/crop-card';

@Component({
  selector: 'app-garden',
  imports: [PageHeadline, CropCard],
  templateUrl: './garden.html',
  styleUrl: './garden.css',
})
export class Garden {
  fields: number[] = [...Array(8).keys()];
  protected readonly JobType = JobType;
}
