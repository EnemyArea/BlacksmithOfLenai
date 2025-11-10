import { Component, computed, input } from '@angular/core';
import { PlayerSkillExperience } from '../../models/player-skill-experience';

@Component({
  selector: 'app-skill-rating',
  imports: [],
  templateUrl: './skill-rating.html',
  styleUrl: './skill-rating.css',
})
export class SkillRating {
  playerSkillExperience = input.required<PlayerSkillExperience>();

  levelList = computed(() =>
    Array.from({ length: this.playerSkillExperience().maxLevel }, (_, i) => i)
  );
}
