import { Component, computed, inject, OnInit } from '@angular/core';
import { PageHeadline } from '../../shared/components/page-headline/page-headline';
import { QuestTabs } from './components/quest-tabs/quest-tabs';
import { QuestCard } from './components/quest-card/quest-card';
import { PlayerService } from '../../core/services/player-service';

@Component({
  selector: 'app-quests',
  imports: [PageHeadline, QuestTabs, QuestCard],
  templateUrl: './quests.html',
  styleUrl: './quests.css',
})
export class Quests implements OnInit {
  private _playerService = inject(PlayerService);
  protected playerQuests = computed(() =>
    this._playerService.getPlayerQuests()
  );

  public ngOnInit(): void {
    this._playerService.loadPlayerQuests();
  }
}
