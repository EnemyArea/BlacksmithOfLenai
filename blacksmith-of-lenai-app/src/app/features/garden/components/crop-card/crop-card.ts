import { Component, computed, input, signal } from '@angular/core';
import { ActionCosts } from '../../../../shared/components/action-costs/action-costs';
import { CropStatusBar } from '../crop-status-bar/crop-status-bar';
import { SkillRating } from '../../../../shared/components/skill-rating/skill-rating';
import { JobType } from '../../../../shared/enums/job-type';
import { PageCard } from '../../../../shared/components/page-card/page-card';
import { MoneyPipe } from '../../../../shared/pipes/money-pipe';
import { Countdown } from '../../../../shared/components/countdown/countdown';
import { EnergyDisplay } from '../../../../shared/components/energy-display/energy-display';
import { GardenField } from '../../../../shared/models/player-garden';

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

  gardenField = input.required<GardenField>();

  protected canHarvested = computed(() => this.isCompleted());
  protected canReplanted = computed(() => !this.isCompleted());
  protected canIrrigated = computed(
    () => !this.isCompleted() && this.gardenField()?.isIrrigated === false
  );
  protected canFertilized = computed(
    () => !this.isCompleted() && this.gardenField()?.isFertilized === false
  );

  onCountdownCompleted() {
    this.isCompleted.set(true);
  }

  irrigateCropHandler() {
    this.gardenField().isIrrigated = true;
  }

  fertilizeCropHandler() {
    this.gardenField().isFertilized = true;
  }
}
