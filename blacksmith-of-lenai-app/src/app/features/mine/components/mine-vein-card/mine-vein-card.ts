import { Component, Input } from '@angular/core';
import { ActionCosts } from '../../../../shared/components/action-costs/action-costs';
import { SkillRating } from '../../../../shared/components/skill-rating/skill-rating';
import { JobType } from '../../../../shared/enums/job-type';

@Component({
  selector: 'app-mine-vein-card',
  imports: [ActionCosts, SkillRating],
  templateUrl: './mine-vein-card.html',
  styleUrl: './mine-vein-card.css',
  host: {
    class: ' flex-auto lg:flex-none lg:w-96',
  },
})
export class MineVeinCard {
  protected readonly JobType = JobType;

  @Input() isRevealed = false;
  @Input() isOreVein = false;
}
