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
  public readonly cardTitle = input.required<string>();
  public readonly cardDescription = input.required<string>();
  public readonly actionBtnLabel = input.required<string>();
  public readonly energyCosts = input<number>();
  public readonly duration = input<number>();
  public readonly experience = input<number>();
  public readonly jobType = input<JobType>();

  protected handleActionBtnClick(): void {
    // if (this.onActionBtnClick) {
    //   this.onActionBtnClick();
    // }
  }
}
