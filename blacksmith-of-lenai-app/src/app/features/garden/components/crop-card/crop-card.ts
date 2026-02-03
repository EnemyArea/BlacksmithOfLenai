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

  protected cultivableField = input.required<CultivableField>();

  protected canHarvested = computed(() => this.isCompleted());
  protected canReplanted = computed(() => !this.isCompleted());
  protected canIrrigated = computed(
    () => !this.isCompleted() && this.cultivableField()?.isIrrigated === false
  );
  protected canFertilized = computed(
    () => !this.isCompleted() && this.cultivableField()?.isFertilized === false
  );

  protected onCountdownCompleted(): void {
    this.isCompleted.set(true);
  }

  protected irrigateCropHandler(): void {
    this.cultivableField().isIrrigated = true;
  }

  protected fertilizeCropHandler(): void {
    this.cultivableField().isFertilized = true;
  }
}
