import { Component, OnInit } from '@angular/core';
import { PageHeadline } from '../../shared/components/page-headline/page-headline';
import { JobType } from '../../shared/enums/job-type';
import { CropCard } from './components/crop-card/crop-card';
import {
  CultivableField,
  PlayerGarden,
} from '../../shared/models/player-garden';
import { sumBy } from '../../shared/helper/linq';
import { EnergyDisplay } from '../../shared/components/energy-display/energy-display';

@Component({
  selector: 'app-garden',
  imports: [PageHeadline, CropCard, EnergyDisplay],
  templateUrl: './garden.html',
  styleUrl: './garden.css',
})
export class Garden implements OnInit {
  protected readonly JobType = JobType;

  protected maxCultivableFields = 9;
  protected playerGarden?: PlayerGarden = undefined;

  ngOnInit() {
    const cultivableFields: CultivableField[] = [];
    for (let i = 0; i < this.maxCultivableFields; i++) {
      cultivableFields[i] = {
        timePassed: 0,
        isPurchased: false,
        isIrrigated: false,
        isFertilized: false,
        price: i * 1000,
      };
    }

    cultivableFields[0] = {
      isPurchased: true,
      isIrrigated: false,
      isFertilized: false,
      price: 0,
      timePassed: 10,
      gardenCrop: {
        gardenCropId: 'dc2aa218-c368-46eb-a7a2-ad356d624b6e',
        gardenCropName: 'Unkraut',
        duration: 180,
        energyCostsPlant: 2,
        energyCostsHarvest: 2,
        energyCostsFertilize: 2,
        energyCostsIrrigation: 2,
        energyCostsReplant: 2,
        jobType: JobType.HerbCollector,
        experience: 100,
        jobExperience: 100,
      },
    };

    this.playerGarden = {
      cultivableFields: cultivableFields,
    };
  }

  getMaxEnergyCostsHarvesting(): number {
    if (!this.playerGarden) return 0;
    return sumBy(
      this.playerGarden.cultivableFields,
      x => x.gardenCrop?.energyCostsHarvest ?? 0
    );
  }

  getMaxEnergyCostsReplanting(): number {
    if (!this.playerGarden) return 0;
    return sumBy(
      this.playerGarden.cultivableFields,
      x => x.gardenCrop?.energyCostsReplant ?? 0
    );
  }

  getMaxEnergyCostsWatering(): number {
    if (!this.playerGarden) return 0;
    return sumBy(
      this.playerGarden.cultivableFields,
      x => x.gardenCrop?.energyCostsIrrigation ?? 0
    );
  }

  getMaxEnergyCostsFertilizing(): number {
    if (!this.playerGarden) return 0;
    return sumBy(
      this.playerGarden.cultivableFields,
      x => x.gardenCrop?.energyCostsFertilize ?? 0
    );
  }
}
