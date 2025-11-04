import { Component, Input } from '@angular/core';
import { CharacterStatusData } from '../../../../shared/models/character-status-data';

@Component({
  selector: 'app-character-status-list',
  imports: [],
  templateUrl: './character-status-list.html',
  styleUrl: './character-status-list.css',
})
export class CharacterStatusList {
  @Input() characterStatusList: CharacterStatusData[] = [];
}
