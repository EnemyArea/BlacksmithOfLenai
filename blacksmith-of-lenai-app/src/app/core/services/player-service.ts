import { Injectable, signal } from '@angular/core';
import { PlayerSkillExperience } from '../../shared/models/player-skill-experience';
import {
  CultivableField,
  PlayerGarden,
} from '../../shared/models/player-garden';
import { JobType } from '../../shared/enums/job-type';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  private _gardenCropExpTable = signal<Record<string, PlayerSkillExperience>>({
    'dc2aa218-c368-46eb-a7a2-ad356d624b6e': {
      currentExp: 10,
      nextLevelExp: 20,
      currentLevel: 1,
      maxLevel: 10,
    },
  });

  private _playerGardenFields = signal<Record<number, CultivableField>>({
    4: {
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
      playerSkillExperience: this.getExpForGardenCop(
        'dc2aa218-c368-46eb-a7a2-ad356d624b6e'
      ),
    },
  });

  getPlayerGarden(): PlayerGarden {
    return {
      cultivableFields: this._playerGardenFields(),
    };
  }

  getExpForGardenCop(gardenCropId: string): PlayerSkillExperience {
    if (!gardenCropId) throw 'Garden Crop id must be provided';

    return this._gardenCropExpTable()[gardenCropId];
  }
}
