import { Component } from '@angular/core';
import { PageHeadline } from '../../shared/components/page-headline/page-headline';
import { DurationPipe } from '../../shared/pipes/duration.pipe';
import { PageSubHeadline } from '../../shared/components/page-sub-headline/page-sub-headline';
import { SkillRating } from '../../shared/components/skill-rating/skill-rating';
import { ActionCosts } from '../../shared/components/action-costs/action-costs';
import { JobType } from '../../shared/enums/job-type';

@Component({
  selector: 'app-mine',
  imports: [
    PageHeadline,
    DurationPipe,
    PageSubHeadline,
    SkillRating,
    ActionCosts,
  ],
  templateUrl: './mine.html',
  styleUrl: './mine.css',
})
export class Mine {
  fields: number[] = [...Array(9).keys()];
  protected readonly JobType = JobType;
}
