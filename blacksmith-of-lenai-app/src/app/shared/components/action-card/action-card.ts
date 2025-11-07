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
  cardTitle = input.required<string>();
  cardDescription = input.required<string>();
  actionBtnLabel = input.required<string>();
  energyCosts = input<number>();
  duration = input<number>();
  experience = input<number>();
  jobType = input<JobType>();

  handleActionBtnClick() {
    // if (this.onActionBtnClick) {
    //   this.onActionBtnClick();
    // }
  }
}
