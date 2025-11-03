import { Component } from '@angular/core';
import { DurationPipe } from '../../shared/pipes/duration.pipe';
import { PageHeadline } from '../../shared/components/page-headline/page-headline';
import { SkillRating } from '../../shared/components/skill-rating/skill-rating';
import { ActionCosts } from '../../shared/components/action-costs/action-costs';
import { JobType } from '../../shared/enums/job-type';

@Component({
  selector: 'app-forge',
  imports: [DurationPipe, PageHeadline, SkillRating, ActionCosts],
  templateUrl: './forge.html',
  styleUrl: './forge.css',
})
export class Forge {
  fields: number[] = [...Array(8).keys()];
  protected readonly JobType = JobType;
}
