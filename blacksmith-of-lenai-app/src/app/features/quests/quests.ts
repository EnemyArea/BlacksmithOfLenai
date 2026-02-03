import { Component, inject, OnInit, signal } from '@angular/core';
import { PageHeadline } from '../../shared/components/page-headline/page-headline';
import { QuestTabs } from './components/quest-tabs/quest-tabs';
import { QuestCard } from './components/quest-card/quest-card';
import { PlayerService } from '../../core/services/player-service';
import { PlayerQuest } from '../../shared/models/player-quest';

@Component({
  selector: 'app-quests',
  imports: [PageHeadline, QuestTabs, QuestCard],
  templateUrl: './quests.html',
  styleUrl: './quests.css',
})
export class Quests implements OnInit {
  private _playerService = inject(PlayerService);
  protected playerQuests = signal<PlayerQuest[]>([]);

  public ngOnInit(): void {
    this.playerQuests.set(this._playerService.getPlayerQuests());
  }
}
