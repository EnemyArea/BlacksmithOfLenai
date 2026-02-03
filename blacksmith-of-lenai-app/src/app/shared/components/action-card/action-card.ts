import { Component, input } from '@angular/core';
import { JobType } from '../../enums/job-type';
import { ActionCosts } from '../action-costs/action-costs';
import { PageCard } from '../page-card/page-card';

@Component({
  selector: 'app-action-card',
  imports: [ActionCosts, PageCard],
  templateUrl: './action-card.html',
  styleUrl: './action-card.css',
  host: {
    class: 'card soft-gradient text-neutral-content w-96',
  },
})
export class ActionCard {
  protected cardTitle = input.required<string>();
  protected cardDescription = input.required<string>();
  protected actionBtnLabel = input.required<string>();
  protected energyCosts = input<number>();
  protected duration = input<number>();
  protected experience = input<number>();
  protected jobType = input<JobType>();

  protected handleActionBtnClick(): void {
    // if (this.onActionBtnClick) {
    //   this.onActionBtnClick();
    // }
  }
}
