import { Component, computed, inject, OnInit } from '@angular/core';
import { PageHeadline } from '../../shared/components/page-headline/page-headline';
import { JobType } from '../../shared/enums/job-type';
import { CropCard } from './components/crop-card/crop-card';
import {
  CultivableField,
  PlayerGarden,
} from '../../shared/models/player-garden';
import { sumBy } from '../../shared/helper/linq';
import { EnergyDisplay } from '../../shared/components/energy-display/energy-display';
import { PlayerService } from '../../core/services/player-service';

@Component({
  selector: 'app-garden',
  imports: [PageHeadline, CropCard, EnergyDisplay],
  templateUrl: './garden.html',
  styleUrl: './garden.css',
})
export class Garden implements OnInit {
  private playerService = inject(PlayerService);
  protected readonly JobType = JobType;
  protected maxCultivableFields = 9;
  protected playerGarden?: PlayerGarden;

  maxEnergyCostsHarvesting = computed(() => this.getMaxEnergyCostsHarvesting());
  maxEnergyCostsReplanting = computed(() => this.getMaxEnergyCostsReplanting());
  maxEnergyCostsIrrigation = computed(() => this.getMaxEnergyCostsIrrigation());
  maxEnergyCostsFertilizing = computed(() =>
    this.getMaxEnergyCostsFertilizing()
  );

  ngOnInit() {
    const playerGardenData = this.playerService.getPlayerGarden();
    const cultivableFields: CultivableField[] = [];

    for (let i = 0; i < this.maxCultivableFields; i++) {
      const cultivableField = playerGardenData.cultivableFields[i];
      if (cultivableField) {
        cultivableFields[i] = {
          timePassed: cultivableField.timePassed,
          isPurchased: cultivableField.isPurchased,
          isIrrigated: cultivableField.isIrrigated,
          isFertilized: cultivableField.isFertilized,
          price: cultivableField.price,
          gardenCrop: cultivableField.gardenCrop,
          playerSkillExperience: cultivableField.playerSkillExperience,
        };
      } else {
        cultivableFields[i] = {
          timePassed: 0,
          isPurchased: false,
          isIrrigated: false,
          isFertilized: false,
          price: i * 1000,
        };
      }
    }

    this.playerGarden = {
      cultivableFields: cultivableFields,
    };
  }

  private getMaxEnergyCostsHarvesting(): number {
    if (!this.playerGarden) return 0;
    return sumBy(
      Object.values(this.playerGarden.cultivableFields),
      x => x.gardenCrop?.energyCostsHarvest ?? 0
    );
  }

  private getMaxEnergyCostsReplanting(): number {
    if (!this.playerGarden) return 0;
    return sumBy(
      Object.values(this.playerGarden.cultivableFields),
      x => x.gardenCrop?.energyCostsReplant ?? 0
    );
  }

  private getMaxEnergyCostsIrrigation(): number {
    if (!this.playerGarden) return 0;
    return sumBy(
      Object.values(this.playerGarden.cultivableFields),
      x => x.gardenCrop?.energyCostsIrrigation ?? 0
    );
  }

  private getMaxEnergyCostsFertilizing(): number {
    if (!this.playerGarden) return 0;
    return sumBy(
      Object.values(this.playerGarden.cultivableFields),
      x => x.gardenCrop?.energyCostsFertilize ?? 0
    );
  }

  protected readonly Object = Object;
}
