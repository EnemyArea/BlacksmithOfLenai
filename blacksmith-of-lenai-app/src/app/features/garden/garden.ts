import { Component, computed, inject, OnInit, signal } from '@angular/core';
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
import { newGuid } from '../../shared/helper/guid';

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
  protected playerGarden = signal<PlayerGarden | undefined>(undefined);

  protected maxEnergyCostsHarvesting = computed(() =>
    this.getMaxEnergyCostsHarvesting()
  );
  protected maxEnergyCostsReplanting = computed(() =>
    this.getMaxEnergyCostsReplanting()
  );
  protected maxEnergyCostsIrrigation = computed(() =>
    this.getMaxEnergyCostsIrrigation()
  );
  protected maxEnergyCostsFertilizing = computed(() =>
    this.getMaxEnergyCostsFertilizing()
  );

  public ngOnInit(): void {
    const playerGardenData = this.playerService.getPlayerGarden();
    const cultivableFields: CultivableField[] = [];

    for (let i = 0; i < this.maxCultivableFields; i++) {
      cultivableFields[i] = {
        playerGardenFieldId: newGuid(),
        fieldIndex: i,
        timePassed: 0,
        isPurchased: false,
        isIrrigated: false,
        isFertilized: false,
        price: (i + 1) * 1000,
      };
    }

    for (let i = 0; i < this.maxCultivableFields; i++) {
      const cultivableField = playerGardenData.cultivableFields.find(
        x => x.fieldIndex === i
      );
      if (cultivableField) {
        cultivableFields[cultivableField.fieldIndex] = {
          playerGardenFieldId: cultivableField.playerGardenFieldId,
          fieldIndex: cultivableField.fieldIndex,
          timePassed: cultivableField.timePassed,
          isPurchased: cultivableField.isPurchased,
          isIrrigated: cultivableField.isIrrigated,
          isFertilized: cultivableField.isFertilized,
          price: cultivableField.price,
          gardenCrop: cultivableField.gardenCrop,
          playerSkillExperience: cultivableField.playerSkillExperience,
        };
      }
    }

    this.playerGarden.set({
      cultivableFields: cultivableFields,
    });
  }

  private getMaxEnergyCostsHarvesting(): number {
    if (!this.playerGarden()) return 0;
    return sumBy(
      Object.values(this.playerGarden()!.cultivableFields),
      x => x.gardenCrop?.energyCostsHarvest ?? 0
    );
  }

  private getMaxEnergyCostsReplanting(): number {
    if (!this.playerGarden()) return 0;
    return sumBy(
      Object.values(this.playerGarden()!.cultivableFields),
      x => x.gardenCrop?.energyCostsReplant ?? 0
    );
  }

  private getMaxEnergyCostsIrrigation(): number {
    if (!this.playerGarden()) return 0;
    return sumBy(
      Object.values(this.playerGarden()!.cultivableFields),
      x => x.gardenCrop?.energyCostsIrrigation ?? 0
    );
  }

  private getMaxEnergyCostsFertilizing(): number {
    if (!this.playerGarden()) return 0;
    return sumBy(
      Object.values(this.playerGarden()!.cultivableFields),
      x => x.gardenCrop?.energyCostsFertilize ?? 0
    );
  }
}
