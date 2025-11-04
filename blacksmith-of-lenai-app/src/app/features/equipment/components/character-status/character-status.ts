import { Component } from '@angular/core';
import { CharacterStatusList } from '../character-status-list/character-status-list';
import { PageCard } from '../../../../shared/components/page-card/page-card';
import { PageSubHeadline } from '../../../../shared/components/page-sub-headline/page-sub-headline';

@Component({
  selector: 'app-character-status',
  imports: [CharacterStatusList, PageCard, PageSubHeadline],
  templateUrl: './character-status.html',
  styleUrl: './character-status.css',
})
export class CharacterStatus {}
