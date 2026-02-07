import { Component } from '@angular/core';
import { PageCard } from '../../../../shared/components/page-card/page-card';
import { PageSubHeadline } from '../../../../shared/components/page-sub-headline/page-sub-headline';
import { SkillRating } from '../../../../shared/components/skill-rating/skill-rating';
import { PlayerSkillExperience } from '../../../../shared/models/player-skill-experience';
import { newGuid } from '../../../../shared/helper/guid';

@Component({
  selector: 'app-character-tools',
  imports: [PageCard, PageSubHeadline, SkillRating],
  templateUrl: './character-tools.html',
})
export class CharacterTools {
  protected playerSkillExperience: PlayerSkillExperience = {
    currentExp: 0,
    currentLevel: 1,
    nextLevelExp: 1,
    maxLevel: 10,
    playerSkillExperienceId: newGuid(),
  };
}
