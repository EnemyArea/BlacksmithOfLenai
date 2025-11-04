import { Component } from '@angular/core';
import { PageHeadline } from '../../shared/components/page-headline/page-headline';
import { CharacterStatus } from './components/character-status/character-status';
import { CharacterTools } from './components/character-tools/character-tools';
import { CharacterItems } from './components/character-items/character-items';

@Component({
  selector: 'app-equipment',
  imports: [PageHeadline, CharacterStatus, CharacterTools, CharacterItems],
  templateUrl: './equipment.html',
  styleUrl: './equipment.css',
})
export class Equipment {}
