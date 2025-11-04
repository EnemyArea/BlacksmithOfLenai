import { Component, Input } from '@angular/core';
import { PlayerQuest } from '../../../../shared/models/player-quest';

@Component({
  selector: 'app-quest-card-rewards',
  imports: [],
  templateUrl: './quest-card-rewards.html',
  styleUrl: './quest-card-rewards.css',
})
export class QuestCardRewards {
  @Input() playerQuest: PlayerQuest | undefined = undefined;
}
