import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill-perk',
  imports: [],
  templateUrl: './skill-perk.html',
  styleUrl: './skill-perk.css',
})
export class SkillPerk {
  @Input() perkIcon = '';
  @Input() perkName = '';
  @Input() perkDescription = '';
}
