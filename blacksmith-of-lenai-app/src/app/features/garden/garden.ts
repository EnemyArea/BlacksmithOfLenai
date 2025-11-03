import { Component } from '@angular/core';
import { PageHeadline } from '../../shared/components/page-headline/page-headline';
import { SkillRating } from '../../shared/components/skill-rating/skill-rating';
import { ActionCosts } from '../../shared/components/action-costs/action-costs';
import { JobType } from '../../shared/enums/job-type';
import { CropStatusBar } from './components/crop-status-bar/crop-status-bar';

@Component({
  selector: 'app-garden',
  imports: [PageHeadline, SkillRating, ActionCosts, CropStatusBar],
  templateUrl: './garden.html',
  styleUrl: './garden.css',
})
export class Garden {
  fields: number[] = [...Array(8).keys()];
  protected readonly JobType = JobType;
}
