import { Component, Input } from '@angular/core';
import { ActionCosts } from '../../../../shared/components/action-costs/action-costs';
import { SkillRating } from '../../../../shared/components/skill-rating/skill-rating';
import { JobType } from '../../../../shared/enums/job-type';
import { PageCard } from '../../../../shared/components/page-card/page-card';

@Component({
  selector: 'app-mine-vein-card',
  imports: [ActionCosts, SkillRating, PageCard],
  templateUrl: './mine-vein-card.html',
  styleUrl: './mine-vein-card.css',
  host: {
    class: ' flex-auto lg:flex-none lg:w-96',
  },
})
export class MineVeinCard {
  @Input() isRevealed = false;
  @Input() isOreVein = false;
  protected readonly JobType = JobType;
}
