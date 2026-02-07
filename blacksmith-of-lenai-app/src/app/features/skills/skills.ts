import { Component, inject, OnInit } from '@angular/core';
import { PageHeadline } from '../../shared/components/page-headline/page-headline';
import { CollapsibleSkill } from './components/collapsible-skill/collapsible-skill';
import { PlayerSkillFacade } from './state/skills.facade';

@Component({
  selector: 'app-skills',
  imports: [PageHeadline, CollapsibleSkill],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
  standalone: true,
})
export class Skills implements OnInit {
  private playerSkillFacade = inject(PlayerSkillFacade);
  protected playerSkills = this.playerSkillFacade.playerSkills;

  public ngOnInit(): void {
    this.playerSkillFacade.loadPlayerSkills();
  }
}
