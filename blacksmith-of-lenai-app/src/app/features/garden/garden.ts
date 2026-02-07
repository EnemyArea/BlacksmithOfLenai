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
})
export class Garden implements OnInit {
  private playerGardenFacade = inject(PlayerGardenFacade);

  protected readonly JobType = JobType;
  protected maxCultivableFields = 9;

  protected playerGardenFields = this.playerGardenFacade.playerGardenFields;

  protected maxEnergyCostsHarvesting =
    this.playerGardenFacade.maxEnergyCostsHarvest;
  protected maxEnergyCostsReplanting =
    this.playerGardenFacade.maxEnergyCostsReplant;
  protected maxEnergyCostsIrrigation =
    this.playerGardenFacade.maxEnergyCostsIrrigation;
  protected maxEnergyCostsFertilizing =
    this.playerGardenFacade.maxEnergyCostsFertilize;

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
    this.playerGardenFacade.loadPlayerGardens();
  }
}
