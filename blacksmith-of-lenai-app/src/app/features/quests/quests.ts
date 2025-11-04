import { Component } from '@angular/core';
import { PageCard } from '../../shared/components/page-card/page-card';
import { PageHeadline } from '../../shared/components/page-headline/page-headline';
import { SkillPerk } from '../skills/components/skill-perk/skill-perk';
import { SkillRating } from '../../shared/components/skill-rating/skill-rating';
import { PageSubHeadline } from '../../shared/components/page-sub-headline/page-sub-headline';

@Component({
  selector: 'app-quests',
  imports: [PageCard, PageHeadline, SkillPerk, SkillRating, PageSubHeadline],
  templateUrl: './quests.html',
  styleUrl: './quests.css',
})
export class Quests {}
