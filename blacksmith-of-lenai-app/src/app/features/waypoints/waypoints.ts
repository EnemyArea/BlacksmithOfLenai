import { Component } from '@angular/core';
import { PageHeadline } from '../../shared/components/page-headline/page-headline';
import { ActionCosts } from '../../shared/components/action-costs/action-costs';
import { JobType } from '../../shared/enums/job-type';
import { ActionCard } from '../../shared/components/action-card/action-card';

@Component({
  selector: 'app-waypoints',
  imports: [PageHeadline, ActionCosts, ActionCard],
  templateUrl: './waypoints.html',
  styleUrl: './waypoints.css',
})
export class Waypoints {
  protected readonly JobType = JobType;
}
