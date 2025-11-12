import { Component, inject, OnInit, computed } from '@angular/core';
import { PageHeadline } from '../../shared/components/page-headline/page-headline';
import { CollapsibleSkill } from './components/collapsible-skill/collapsible-skill';
import { PlayerService } from '../../core/services/player-service';

@Component({
  selector: 'app-skills',
  imports: [PageHeadline, CollapsibleSkill],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
  standalone: true,
})
export class Skills implements OnInit {
  private _playerService = inject(PlayerService);
  protected playerSkills = computed(() =>
    this._playerService.getPlayerSkills()
  );

  ngOnInit() {
    this._playerService.loadPlayerSkills();
  }
}
