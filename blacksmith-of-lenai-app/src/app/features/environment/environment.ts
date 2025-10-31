import { Component, ViewChild } from '@angular/core';
import { CollapsibleTeaser } from '../../shared/components/collapsible-teaser/collapsible-teaser';
import { ActionCard } from '../../shared/components/action-card/action-card';
import { ActionCardDialog } from '../../shared/components/action-card-dialog/action-card-dialog';
import { JobType } from '../../shared/enums/job-type';
import { PageSubHeadline } from '../../shared/components/page-sub-headline/page-sub-headline';

@Component({
  selector: 'app-environment',
  imports: [CollapsibleTeaser, ActionCard, ActionCardDialog, PageSubHeadline],
  templateUrl: './environment.html',
  styleUrl: './environment.css',
})
export class Environment {
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
