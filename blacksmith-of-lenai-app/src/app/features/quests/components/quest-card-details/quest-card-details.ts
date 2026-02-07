import { Component, input } from '@angular/core';
import { PlayerQuest } from '../../state/quests.models';

@Component({
  selector: 'app-quest-card-details',
  imports: [],
  templateUrl: './quest-card-details.html',
  styleUrl: './quest-card-details.css',
})
export class QuestCardDetails {
  public readonly playerQuest = input.required<PlayerQuest | undefined>();
}
