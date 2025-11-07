import { Component, inject, signal, OnInit } from '@angular/core';
import { PageHeadline } from '../../shared/components/page-headline/page-headline';
import { CollapsibleSkill } from './components/collapsible-skill/collapsible-skill';
import { PlayerService } from '../../core/services/player-service';
import { PlayerSkill } from '../../shared/models/player-skill';

@Component({
  selector: 'app-skills',
  imports: [PageHeadline, CollapsibleSkill],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills implements OnInit {
  private _playerService = inject(PlayerService);
  protected playerSkills = signal<PlayerSkill[]>([]);

  ngOnInit() {
    this.playerSkills.set(this._playerService.getPlayerSkills());
  }
}
