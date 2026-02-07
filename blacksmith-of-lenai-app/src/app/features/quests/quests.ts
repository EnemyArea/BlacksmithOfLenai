import { Component, inject, OnInit } from '@angular/core';
import { PageHeadline } from '../../shared/components/page-headline/page-headline';
import { QuestTabs } from './components/quest-tabs/quest-tabs';
import { QuestCard } from './components/quest-card/quest-card';
import { PlayerQuestFacade } from './state/quests.facade';

@Component({
  selector: 'app-quests',
  imports: [PageHeadline, QuestTabs, QuestCard],
  templateUrl: './quests.html',
  styleUrl: './quests.css',
})
export class Quests implements OnInit {
  private playerQuestFacade = inject(PlayerQuestFacade);
  protected playerQuests = this.playerQuestFacade.playerQuests;

  public ngOnInit(): void {
    this.playerQuestFacade.loadPlayerQuests();
  }
}
