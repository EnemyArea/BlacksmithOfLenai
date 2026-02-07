import { Component, input } from '@angular/core';
import { SkillPerkData } from '../../../../shared/models/skill-perk-data';

@Component({
  selector: 'app-skill-perk',
  imports: [],
  templateUrl: './skill-perk.html',
})
export class SkillPerk {
  public readonly skillPerkData = input.required<SkillPerkData>();
}
