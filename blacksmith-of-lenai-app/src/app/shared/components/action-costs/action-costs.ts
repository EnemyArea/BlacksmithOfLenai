import { Component, Input } from '@angular/core';
import { DurationPipe } from '../../pipes/duration.pipe';
import { JobType } from '../../enums/job-type';

@Component({
  selector: 'app-action-costs',
  imports: [DurationPipe],
  templateUrl: './action-costs.html',
  styleUrl: './action-costs.css',
})
export class ActionCosts {
  @Input() energyCosts? = 0;
  @Input() duration? = 0;
  @Input() experience? = 0;
  @Input() jobType? = JobType.Unknown;
  @Input() jobExperience? = 0;

  getJobTypeName = (): string => {
    switch (this.jobType) {
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
