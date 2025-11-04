import { Component } from '@angular/core';
import { PageCard } from '../../../../shared/components/page-card/page-card';
import { PageSubHeadline } from '../../../../shared/components/page-sub-headline/page-sub-headline';
import { SkillRating } from '../../../../shared/components/skill-rating/skill-rating';

@Component({
  selector: 'app-character-tools',
  imports: [PageCard, PageSubHeadline, SkillRating],
  templateUrl: './character-tools.html',
  styleUrl: './character-tools.css',
})
export class CharacterTools {}
