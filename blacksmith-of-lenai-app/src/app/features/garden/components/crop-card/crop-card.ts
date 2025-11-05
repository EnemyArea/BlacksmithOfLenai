import { Component, Input } from '@angular/core';
import { ActionCosts } from '../../../../shared/components/action-costs/action-costs';
import { CropStatusBar } from '../crop-status-bar/crop-status-bar';
import { SkillRating } from '../../../../shared/components/skill-rating/skill-rating';
import { JobType } from '../../../../shared/enums/job-type';
import { PageCard } from '../../../../shared/components/page-card/page-card';
import { CultivableField } from '../../../../shared/models/player-garden';
import { MoneyPipe } from '../../../../shared/pipes/money-pipe';
import { Countdown } from '../../../../shared/components/countdown/countdown';
import { EnergyDisplay } from '../../../../shared/components/energy-display/energy-display';

@Component({
  selector: 'app-crop-card',
  imports: [
    ActionCosts,
    CropStatusBar,
    SkillRating,
    PageCard,
    MoneyPipe,
    Countdown,
    EnergyDisplay,
  ],
  templateUrl: './crop-card.html',
  styleUrl: './crop-card.css',
})
export class CropCard {
  protected readonly JobType = JobType;
  protected isCompleted = false;

  @Input() cultivableField?: CultivableField = undefined;

  onCountdownCompleted = (): void => {
    this.isCompleted = true;
    console.log('onCountdownCompleted');
  };

  checkCanHarvested = (): boolean => {
    return this.isCompleted;
  };

  checkCanReplanted = (): boolean => {
    return !this.isCompleted;
  };

  checkCanIrrigated = (): boolean => {
    return !this.isCompleted && this.cultivableField?.isIrrigated === false;
  };

  checkCanFertilized = (): boolean => {
    return !this.isCompleted && this.cultivableField?.isFertilized === false;
  };
}
