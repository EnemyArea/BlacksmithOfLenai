import { Component, Input } from '@angular/core';
import { ActionCosts } from '../../../../shared/components/action-costs/action-costs';
import { CropStatusBar } from '../crop-status-bar/crop-status-bar';
import { SkillRating } from '../../../../shared/components/skill-rating/skill-rating';
import { JobType } from '../../../../shared/enums/job-type';

@Component({
  selector: 'app-crop-card',
  imports: [ActionCosts, CropStatusBar, SkillRating],
  templateUrl: './crop-card.html',
  styleUrl: './crop-card.css',
  host: {
    class: ' flex-auto lg:flex-none lg:w-96',
  },
})
export class CropCard {
  @Input() isPurchased = false;
  @Input() haveCropPlanted = false;
  protected readonly JobType = JobType;
}
