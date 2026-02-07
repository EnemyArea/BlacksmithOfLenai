import { Component, input } from '@angular/core';
import { PageSubHeadline } from '../../../../shared/components/page-sub-headline/page-sub-headline';
import { QuestCardDetails } from '../quest-card-details/quest-card-details';
import { QuestCardRewards } from '../quest-card-rewards/quest-card-rewards';
import { PlayerQuest } from '../../state/quests.models';

@Component({
  selector: 'app-quest-card',
  imports: [PageSubHeadline, QuestCardDetails, QuestCardRewards],
  templateUrl: './quest-card.html',
  styleUrl: './quest-card.css',
})
export class QuestCard {
  public readonly playerQuest = input.required<PlayerQuest | undefined>();
  public readonly isOpen = input.required<boolean>();
}
