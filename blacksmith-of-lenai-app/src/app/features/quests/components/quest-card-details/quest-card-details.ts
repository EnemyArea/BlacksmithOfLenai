import { Component, Input } from '@angular/core';
import { PlayerQuest } from '../../../../shared/models/player-quest';

@Component({
  selector: 'app-quest-card-details',
  imports: [],
  templateUrl: './quest-card-details.html',
  styleUrl: './quest-card-details.css',
})
export class QuestCardDetails {
  @Input() playerQuest: PlayerQuest | undefined = undefined;
}
