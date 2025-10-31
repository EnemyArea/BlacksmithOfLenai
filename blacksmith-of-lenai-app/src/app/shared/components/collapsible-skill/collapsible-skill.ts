import { Component, Input } from '@angular/core';
import { SkillPerk } from '../skill-perk/skill-perk';
import { SkillRating } from '../skill-rating/skill-rating';
import { SkillPerkData } from '../../models/skill-perk-data';

@Component({
  selector: 'app-collapsible-skill',
  imports: [SkillRating, SkillPerk],
  templateUrl: './collapsible-skill.html',
  styleUrl: './collapsible-skill.css',
})
export class CollapsibleSkill {
  @Input() skillName = '';
  @Input() skillLevel = 0;
  @Input() currentSkillExp = 0;
  @Input() skillPerkList: SkillPerkData[] = [];
}
