import { Component } from '@angular/core';
import { CharacterItems } from '../equipment/components/character-items/character-items';
import { CharacterStatus } from '../equipment/components/character-status/character-status';
import { CharacterTools } from '../equipment/components/character-tools/character-tools';
import { PageHeadline } from '../../shared/components/page-headline/page-headline';
import { PageCard } from '../../shared/components/page-card/page-card';
import { PageSubHeadline } from '../../shared/components/page-sub-headline/page-sub-headline';
import { SkillRating } from '../../shared/components/skill-rating/skill-rating';

@Component({
  selector: 'app-storage',
  imports: [
    CharacterItems,
    CharacterStatus,
    CharacterTools,
    PageHeadline,
    PageCard,
    PageSubHeadline,
    SkillRating,
  ],
  templateUrl: './storage.html',
  styleUrl: './storage.css',
})
export class Storage {}
