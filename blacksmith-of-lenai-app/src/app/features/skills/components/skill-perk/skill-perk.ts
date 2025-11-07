import { Component, input } from '@angular/core';

@Component({
  selector: 'app-skill-perk',
  imports: [],
  templateUrl: './skill-perk.html',
  styleUrl: './skill-perk.css',
})
export class SkillPerk {
  perkIcon = input.required<string>();
  perkName = input.required<string>();
  perkDescription = input.required<string>();
}
