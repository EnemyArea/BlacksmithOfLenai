import { Component } from '@angular/core';
import { PageHeadline } from '../../shared/components/page-headline/page-headline';
import { CollapsibleSkill } from './components/collapsible-skill/collapsible-skill';
import { SkillPerkData } from '../../shared/models/skill-perk-data';

@Component({
  selector: 'app-skills',
  imports: [PageHeadline, CollapsibleSkill],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  skillPerkListHerbs: SkillPerkData[] = [
    {
      skillPerkId: 'f3010fee-cc7f-4e6a-bdf5-81caf1de8d87',
      skillPerkName: 'Kräuterkundiger',
      skillPerkDescription: 'Du kannst nun Kräute bis Stufe 2 finden.',
      skillPerkIcon: 'lavenders-6482579_640.jpg',
    },
    {
      skillPerkId: '575b9657-32f1-4515-ba6f-3f3f5cbf4098',
      skillPerkName: 'Kräuterexperte',
      skillPerkDescription:
        'Du kannst nun Kräuter bis Stufe 4 finden und hast die Chance ein weiteres zu sammeln.',
      skillPerkIcon: 'moroccan-mint-2396530_640.jpg',
    },
  ];
}
