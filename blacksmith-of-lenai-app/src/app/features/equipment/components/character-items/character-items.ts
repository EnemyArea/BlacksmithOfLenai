import { Component } from '@angular/core';
import { PageCard } from '../../../../shared/components/page-card/page-card';
import { PageSubHeadline } from '../../../../shared/components/page-sub-headline/page-sub-headline';

@Component({
  selector: 'app-character-items',
  imports: [PageCard, PageSubHeadline],
  templateUrl: './character-items.html',
})
export class CharacterItems {}
