import { Component, input } from '@angular/core';
import { ActionCosts } from '../../../../shared/components/action-costs/action-costs';
import { SkillRating } from '../../../../shared/components/skill-rating/skill-rating';
import { JobType } from '../../../../shared/enums/job-type';
import { PageCard } from '../../../../shared/components/page-card/page-card';
import { PlayerSkillExperience } from '../../../../shared/models/player-skill-experience';
import { newGuid } from '../../../../shared/helper/guid';

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
  protected readonly JobType = JobType;
  public readonly isRevealed = input.required<boolean>();
  public readonly isOreVein = input.required<boolean>();

  protected playerSkillExperience: PlayerSkillExperience = {
    currentExp: 0,
    currentLevel: 1,
    nextLevelExp: 1,
    maxLevel: 10,
    playerSkillExperienceId: newGuid(),
  };
}
