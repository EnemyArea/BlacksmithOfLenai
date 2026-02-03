import { Component, input } from '@angular/core';
import { DurationPipe } from '../../pipes/duration-pipe';
import { JobType } from '../../enums/job-type';

@Component({
  selector: 'app-action-costs',
  imports: [DurationPipe],
  templateUrl: './action-costs.html',
  styleUrl: './action-costs.css',
})
export class ActionCosts {
  protected energyCosts = input<number>();
  protected duration = input<number>();
  protected experience = input<number>();
  protected jobType = input<JobType>();
  protected jobExperience = input<number>();

  protected getJobTypeName(): string {
    switch (this.jobType()) {
      case JobType.HerbCollector:
        return 'Kräuterkunde';
      case JobType.Lumberjack:
        return 'Waldarbeit';
      case JobType.BlackSmith:
        return 'Schmied';
      case JobType.Miner:
        return 'Bergbau';
    }
    return '';
  }
}
