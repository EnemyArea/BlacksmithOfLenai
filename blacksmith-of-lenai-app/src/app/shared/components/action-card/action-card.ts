import { Component, Input } from '@angular/core';
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
  @Input() cardTitle = '';
  @Input() cardDescription = '';
  @Input() onActionBtnClick?: () => void;
  @Input() actionBtnLabel = '';
  @Input() energyCosts? = 0;
  @Input() duration? = 0;
  @Input() experience? = 0;
  @Input() jobType? = JobType.Unknown;

  handleActionBtnClick() {
    if (this.onActionBtnClick) {
      this.onActionBtnClick();
    }
  }
}
