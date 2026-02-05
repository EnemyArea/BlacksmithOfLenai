import { Component, effect, inject, OnInit, signal } from '@angular/core';
import { PageHeadline } from '../../shared/components/page-headline/page-headline';
import { JobType } from '../../shared/enums/job-type';
import { CropCard } from './components/crop-card/crop-card';
import { EnergyDisplay } from '../../shared/components/energy-display/energy-display';
import { GardenField } from './state/garden.models';
import { PlayerGardenFacade } from './state/garden.facade';

@Component({
  selector: 'app-garden',
  imports: [PageHeadline, CropCard, EnergyDisplay],
  templateUrl: './garden.html',
  styleUrl: './garden.css',
})
export class Garden implements OnInit {
  private playerGardenService = inject(PlayerGardenFacade);

  protected readonly JobType = JobType;
  protected maxCultivableFields = 9;

  protected playerGardenFields = this.playerGardenService.playerGardenFields;

  protected maxEnergyCostsHarvesting =
    this.playerGardenService.maxEnergyCostsHarvest;
  protected maxEnergyCostsReplanting =
    this.playerGardenService.maxEnergyCostsReplant;
  protected maxEnergyCostsIrrigation =
    this.playerGardenService.maxEnergyCostsIrrigation;
  protected maxEnergyCostsFertilizing =
    this.playerGardenService.maxEnergyCostsFertilize;

  protected gardenFields = signal<GardenField[]>([]);

  constructor() {
    effect(() => {
      const initGardenFields: GardenField[] = [];

      for (let i = 0; i < this.maxCultivableFields; i++) {
        const playerGardenField = this.playerGardenFields().find(
          x => x.fieldIndex === i
        );
        if (playerGardenField) {
          initGardenFields.push({
            playerGardenFieldId: playerGardenField.playerGardenFieldId,
            fieldIndex: playerGardenField.fieldIndex,
            timePassed: playerGardenField.timePassed,
            isPurchased: playerGardenField.isPurchased,
            isIrrigated: playerGardenField.isIrrigated,
            isFertilized: playerGardenField.isFertilized,
            price: playerGardenField.price,
            gardenCrop: playerGardenField.gardenCrop,
            playerSkillExperience: playerGardenField.playerSkillExperience,
          });
        } else {
          initGardenFields.push({
            fieldIndex: i,
            isFertilized: false,
            isIrrigated: false,
            isPurchased: false,
            price: (i + 1) * 1000,
          });
        }
      }

      this.gardenFields.set(initGardenFields);
    });
  }

  public ngOnInit(): void {
    this.playerGardenService.loadPlayerGarden();
  }
}
