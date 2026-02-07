import { Component } from '@angular/core';
import { PageHeadline } from '../../shared/components/page-headline/page-headline';
import { JobType } from '../../shared/enums/job-type';
import { ActionCard } from '../../shared/components/action-card/action-card';

@Component({
  selector: 'app-waypoints',
  imports: [PageHeadline, ActionCard],
  templateUrl: './waypoints.html',
})
export class Waypoints {
  protected readonly JobType = JobType;
}
