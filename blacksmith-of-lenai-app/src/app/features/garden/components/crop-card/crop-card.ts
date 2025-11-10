import { Component, computed, input, signal } from '@angular/core';
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
  protected isCompleted = signal(false); // Writable Signal

  cultivableField = input.required<CultivableField>();

  canHarvested = computed(() => this.isCompleted());
  canReplanted = computed(() => !this.isCompleted());
  canIrrigated = computed(
    () => !this.isCompleted() && this.cultivableField()?.isIrrigated === false
  );
  canFertilized = computed(
    () => !this.isCompleted() && this.cultivableField()?.isFertilized === false
  );

  onCountdownCompleted() {
    this.isCompleted.set(true);
  }

  irrigateCropHandler() {
    this.cultivableField().isIrrigated = true;
  }

  fertilizeCropHandler() {
    this.cultivableField().isFertilized = true;
  }
}
