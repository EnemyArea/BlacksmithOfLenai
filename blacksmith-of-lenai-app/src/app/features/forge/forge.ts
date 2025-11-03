import { Component } from '@angular/core';
import { PageHeadline } from '../../shared/components/page-headline/page-headline';
import { ActionCosts } from '../../shared/components/action-costs/action-costs';
import { JobType } from '../../shared/enums/job-type';
import { SkillRating } from '../../shared/components/skill-rating/skill-rating';

@Component({
  selector: 'app-forge',
  imports: [PageHeadline, ActionCosts, SkillRating],
  templateUrl: './forge.html',
  styleUrl: './forge.css',
})
export class Forge {
  fields: number[] = [...Array(8).keys()];
  protected readonly JobType = JobType;
}
