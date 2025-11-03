import { Component, Input } from '@angular/core';
import { ActionCosts } from '../../../../shared/components/action-costs/action-costs';
import { CropStatusBar } from '../crop-status-bar/crop-status-bar';
import { SkillRating } from '../../../../shared/components/skill-rating/skill-rating';
import { JobType } from '../../../../shared/enums/job-type';
import { PageCard } from '../../../../shared/components/page-card/page-card';

@Component({
  selector: 'app-crop-card',
  imports: [ActionCosts, CropStatusBar, SkillRating, PageCard],
  templateUrl: './crop-card.html',
  styleUrl: './crop-card.css',
})
export class CropCard {
  @Input() isPurchased = false;
  @Input() haveCropPlanted = false;
  protected readonly JobType = JobType;
}
