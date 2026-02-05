import { Component, computed, input, signal } from '@angular/core';
import { ActionCosts } from '../../../../shared/components/action-costs/action-costs';
import { CropStatusBar } from '../crop-status-bar/crop-status-bar';
import { SkillRating } from '../../../../shared/components/skill-rating/skill-rating';
import { JobType } from '../../../../shared/enums/job-type';
import { PageCard } from '../../../../shared/components/page-card/page-card';
import { MoneyPipe } from '../../../../shared/pipes/money-pipe';
import { Countdown } from '../../../../shared/components/countdown/countdown';
import { EnergyDisplay } from '../../../../shared/components/energy-display/energy-display';
import { GardenField } from '../../state/garden.models';

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
  protected readonly isCompleted = signal(false); // Writable Signal

  public readonly gardenField = input.required<GardenField>();

  protected readonly canHarvested = computed(() => this.isCompleted());
  protected readonly canReplanted = computed(() => !this.isCompleted());
  protected readonly canIrrigated = computed(
    () => !this.isCompleted() && this.gardenField()?.isIrrigated === false
  );
  protected readonly canFertilized = computed(
    () => !this.isCompleted() && this.gardenField()?.isFertilized === false
  );

  protected onCountdownCompleted(): void {
    this.isCompleted.set(true);
  }

  protected irrigateCropHandler(): void {
    this.gardenField().isIrrigated = true;
  }

  protected fertilizeCropHandler(): void {
    this.gardenField().isFertilized = true;
  }
}
