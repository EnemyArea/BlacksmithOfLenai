import { Component, ViewChild } from '@angular/core';
import { CollapsibleTeaser } from '../../shared/components/collapsible-teaser/collapsible-teaser';
import { ActionCard } from '../../shared/components/action-card/action-card';
import { ActionCardDialog } from '../../shared/components/action-card-dialog/action-card-dialog';
import { JobType } from '../../shared/enums/job-type';
import { PageSubHeadline } from '../../shared/components/page-sub-headline/page-sub-headline';

@Component({
  selector: 'app-environment',
  imports: [PageSubHeadline, CollapsibleTeaser, ActionCard, ActionCardDialog],
  templateUrl: './environment.html',
  styleUrl: './environment.css',
})
export class Environment {
  @ViewChild('shieldDialog') protected shieldDialog!: ActionCardDialog;
  @ViewChild('deeperDialog') protected deeperDialog!: ActionCardDialog;
  protected readonly JobType = JobType;

  protected openShieldDialog(): void {
    this.shieldDialog.showDialog();
  }

  protected openDeeperDialog(): void {
    this.deeperDialog.showDialog();
  }
}
