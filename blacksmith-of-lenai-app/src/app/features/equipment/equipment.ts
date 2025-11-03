import { Component } from '@angular/core';
import { PageHeadline } from '../../shared/components/page-headline/page-headline';
import { PageCard } from '../../shared/components/page-card/page-card';
import { PageSubHeadline } from '../../shared/components/page-sub-headline/page-sub-headline';
import { SkillRating } from '../../shared/components/skill-rating/skill-rating';

@Component({
  selector: 'app-equipment',
  imports: [PageHeadline, PageCard, PageSubHeadline, SkillRating],
  templateUrl: './equipment.html',
  styleUrl: './equipment.css',
})
export class Equipment {}
