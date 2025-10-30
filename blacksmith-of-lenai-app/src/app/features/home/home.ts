import { Component, ViewChild } from '@angular/core';
import { CollapsibleTeaser } from '../../shared/components/collapsible-teaser/collapsible-teaser';
import { ActionCard } from '../../shared/components/action-card/action-card';
import { ActionCardDialog } from '../../shared/components/action-card-dialog/action-card-dialog';
import { JobType } from '../../shared/enums/job-type';

@Component({
  selector: 'app-home',
  imports: [CollapsibleTeaser, ActionCard, ActionCardDialog],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  protected readonly JobType = JobType;

  @ViewChild('shieldDialog') shieldDialog!: ActionCardDialog;
  @ViewChild('deeperDialog') deeperDialog!: ActionCardDialog;

  openShieldDialog = () => {
    this.shieldDialog.showDialog();
  };

  openDeeperDialog = () => {
    this.deeperDialog.showDialog();
  };
}
