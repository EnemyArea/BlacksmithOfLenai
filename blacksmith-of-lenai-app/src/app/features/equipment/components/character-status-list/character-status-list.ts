import { Component, input } from '@angular/core';
import { CharacterStatusData } from '../../../../shared/models/character-status-data';

@Component({
  selector: 'app-character-status-list',
  imports: [],
  templateUrl: './character-status-list.html',
})
export class CharacterStatusList {
  public readonly characterStatusList = input.required<CharacterStatusData[]>();
}
