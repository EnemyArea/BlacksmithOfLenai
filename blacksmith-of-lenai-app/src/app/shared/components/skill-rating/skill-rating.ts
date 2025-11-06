import { Component, input } from '@angular/core';

@Component({
  selector: 'app-skill-rating',
  imports: [],
  templateUrl: './skill-rating.html',
  styleUrl: './skill-rating.css',
})
export class SkillRating {
  protected levelList: number[] = [];

  maxLevel = input.required<number>();
  currentExp = input.required<number>();
  nextLevelExp = input.required<number>();
  currentLevel = input.required<number>();
}
