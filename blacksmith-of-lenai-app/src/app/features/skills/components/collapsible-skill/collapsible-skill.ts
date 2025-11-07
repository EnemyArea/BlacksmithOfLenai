import { Component, input } from '@angular/core';
import { SkillPerk } from '../skill-perk/skill-perk';
import { SkillRating } from '../../../../shared/components/skill-rating/skill-rating';
import { SkillPerkData } from '../../../../shared/models/skill-perk-data';

@Component({
  selector: 'app-collapsible-skill',
  imports: [SkillRating, SkillPerk],
  templateUrl: './collapsible-skill.html',
  styleUrl: './collapsible-skill.css',
})
export class CollapsibleSkill {
  skillName = input.required<string>();
  skillLevel = input.required<number>();
  currentSkillExp = input.required<number>();
  skillPerkList = input.required<SkillPerkData[]>();
}
