import { Component, input } from '@angular/core';
import { SkillPerk } from '../skill-perk/skill-perk';
import { SkillRating } from '../../../../shared/components/skill-rating/skill-rating';
import { PlayerSkill } from '../../state/skills.models';

@Component({
  selector: 'app-collapsible-skill',
  imports: [SkillRating, SkillPerk],
  templateUrl: './collapsible-skill.html',
  styleUrl: './collapsible-skill.css',
})
export class CollapsibleSkill {
  public readonly playerSkill = input.required<PlayerSkill>();
}
