import { Component, input } from '@angular/core';
import { PageSubHeadline } from '../../../../shared/components/page-sub-headline/page-sub-headline';
import { PlayerQuest } from '../../../../shared/models/player-quest';
import { QuestCardDetails } from '../quest-card-details/quest-card-details';
import { QuestCardRewards } from '../quest-card-rewards/quest-card-rewards';

@Component({
  selector: 'app-quest-card',
  imports: [PageSubHeadline, QuestCardDetails, QuestCardRewards],
  templateUrl: './quest-card.html',
  styleUrl: './quest-card.css',
})
export class QuestCard {
  playerQuest = input.required<PlayerQuest | undefined>();
  isOpen = input.required<boolean>();
}
