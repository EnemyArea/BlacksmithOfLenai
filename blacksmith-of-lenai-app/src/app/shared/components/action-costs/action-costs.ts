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
  energyCosts = input<number>();
  duration = input<number>();
  experience = input<number>();
  jobType = input<JobType>();
  jobExperience = input<number>();

  getJobTypeName = (): string => {
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
  };
}
