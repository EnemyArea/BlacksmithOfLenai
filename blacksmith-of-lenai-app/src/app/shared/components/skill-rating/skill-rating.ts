import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill-rating',
  imports: [],
  templateUrl: './skill-rating.html',
  styleUrl: './skill-rating.css',
})
export class SkillRating {
  @Input() currentLevel = 0;
  @Input() maxLevel = 0;
  @Input() currentExp = 0;
  @Input() nextLevelExp = 0;
}
