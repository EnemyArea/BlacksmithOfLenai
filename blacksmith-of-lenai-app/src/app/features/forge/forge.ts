import { Component } from '@angular/core';
import { PageHeadline } from '../../shared/components/page-headline/page-headline';
import { ActionCosts } from '../../shared/components/action-costs/action-costs';
import { JobType } from '../../shared/enums/job-type';

@Component({
  selector: 'app-forge',
  imports: [PageHeadline, ActionCosts],
  templateUrl: './forge.html',
  styleUrl: './forge.css',
})
export class Forge {
  fields: number[] = [...Array(8).keys()];
  protected readonly JobType = JobType;
}
