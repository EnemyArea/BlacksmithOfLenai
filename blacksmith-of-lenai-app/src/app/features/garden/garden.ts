import {
  Component,
  computed,
  effect,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { PageHeadline } from '../../shared/components/page-headline/page-headline';
import { JobType } from '../../shared/enums/job-type';
import { CropCard } from './components/crop-card/crop-card';
import { sumBy } from '../../shared/helper/linq';
import { EnergyDisplay } from '../../shared/components/energy-display/energy-display';
import { PlayerService } from '../../core/services/player-service';
import { GardenField } from '../../shared/models/player-garden';

@Component({
  selector: 'app-garden',
  imports: [PageHeadline, CropCard, EnergyDisplay],
  templateUrl: './garden.html',
  styleUrl: './garden.css',
})
export class Garden implements OnInit {
  private _playerService = inject(PlayerService);
  protected readonly JobType = JobType;
  protected maxCultivableFields = 9;
  protected playerGardenFields = computed(() =>
    this._playerService.getPlayerGardenFields()
  );
  protected gardenFields = signal<GardenField[]>([]);

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

  constructor() {
    effect(() => {
      const initGardenFields: GardenField[] = [];

      const playerGardenFields = this.playerGardenFields();
      for (let i = 0; i < this.maxCultivableFields; i++) {
        const playerGardenField = playerGardenFields.find(
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

  ngOnInit() {
    this._playerService.loadPlayerGardenFields();
  }

  private getMaxEnergyCostsHarvesting(): number {
    if (!this.playerGardenFields()) return 0;
    return sumBy(
      this.playerGardenFields(),
      x => x.gardenCrop?.energyCostsHarvest ?? 0
    );
  }

  private getMaxEnergyCostsReplanting(): number {
    if (!this.playerGardenFields()) return 0;
    return sumBy(
      this.playerGardenFields(),
      x => x.gardenCrop?.energyCostsReplant ?? 0
    );
  }

  private getMaxEnergyCostsIrrigation(): number {
    if (!this.playerGardenFields()) return 0;
    return sumBy(
      this.playerGardenFields(),
      x => x.gardenCrop?.energyCostsIrrigation ?? 0
    );
  }

  private getMaxEnergyCostsFertilizing(): number {
    if (!this.playerGardenFields()) return 0;
    return sumBy(
      this.playerGardenFields(),
      x => x.gardenCrop?.energyCostsFertilize ?? 0
    );
  }
}
