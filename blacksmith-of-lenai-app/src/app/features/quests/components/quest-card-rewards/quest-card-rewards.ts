import { Component, input } from '@angular/core';
import { PlayerQuest } from '../../state/quests.models';

@Component({
  selector: 'app-quest-card-rewards',
  imports: [],
  templateUrl: './quest-card-rewards.html',
})
export class QuestCardRewards {
  public readonly playerQuest = input.required<PlayerQuest | undefined>();
}
