import { inject, Injectable, signal } from '@angular/core';
import { PlayerSkillExperience } from '../../shared/models/player-skill-experience';
import {
  CultivableField,
  PlayerGarden,
} from '../../shared/models/player-garden';
import { JobType } from '../../shared/enums/job-type';
import { PlayerQuest } from '../../shared/models/player-quest';
import { PlayerSkill } from '../../shared/models/player-skill';
import { PlayerStorage } from '../../shared/models/player-storage';
import { ItemType } from '../../shared/enums/item-type';
import { GameClient } from './game-client';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  private gameClient = inject(GameClient);

  private _gardenCropExpTable = signal<Record<string, PlayerSkillExperience>>({
    'dc2aa218-c368-46eb-a7a2-ad356d624b6e': {
      playerSkillExperienceId: 'dc2aa218-c368-46eb-a7a2-ad356d624b6e',
      currentExp: 10,
      nextLevelExp: 20,
      currentLevel: 1,
      maxLevel: 10,
    },
  });

  private _playerGardenFields = signal<Record<string, CultivableField>>({
    '035a77e2-8848-4035-b8d6-d8ec71681499': {
      playerGardenFieldId: '035a77e2-8848-4035-b8d6-d8ec71681499',
      fieldIndex: 4,
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

  private _playerQuests = signal<Record<string, PlayerQuest>>({
    '0a7a100c-ed1c-4628-aed1-fc018498e019': {
      playerQuestId: '0a7a100c-ed1c-4628-aed1-fc018498e019',
      isCompleted: false,
      completedQuestDetails: [],
      questData: {
        questId: '6a6e354d-c8cb-4ab0-b4da-2f448687ad7f',
        questName: '8. Tag des Erntemondes',
        isMainQuest: true,
        questDescription:
          'Endlich haben wir den Wald erreicht. Die Dunkelheit war gnädig und hat unsere Spuren verschluckt. Mein Bruder schlief unruhig, das Feuer flackerte schwach und war kaum mehr als ein tröstender Funke in all der Finsternis. Ich kann den Wind durch die alten Bäume hören – als würde er unsere Flucht belauschen. Wir haben nur das Nötigste bei uns. Ein paar Stücke Brot, die alte Decke, und Mut, der langsam schwindet. Doch hier, fern von all dem Lärm und den Suchtrupps, spüre ich zum ersten Mal seit Tagen einen Hauch von Frieden. Wenn der Morgen kommt, werden wir tiefer in den Wald ziehen. Vielleicht finden wir einen Ort, den niemand kennt. Einen Ort, den wir „Zuhause“ nennen können.',
        questDetails: [
          {
            questDetailId: '92035917-6cde-4add-b7dd-6f8e239fb37d',
            questDetailName: 'Überlebe die Nacht',
          },
          {
            questDetailId: '320929ce-266a-438b-b776-6f6575ccd3bb',
            questDetailName: 'Finde ein neues Zuhause',
          },
        ],
        questRewards: [{ experience: 120 }],
      },
    },
    '3be76117-7118-46ee-9a60-518bf327f840': {
      playerQuestId: '3be76117-7118-46ee-9a60-518bf327f840',
      isCompleted: true,
      completedQuestDetails: ['7e7b2983-55b2-40be-a2ca-7d10fa39b9ca'],
      questData: {
        questId: '35303ed0-d522-4535-bb1d-ce3fe1020031',
        questName: '7. Tag des Erntemondes',
        isMainQuest: true,
        questDescription:
          'Wir haben die Stadt hinter uns gelassen. Die Straßen lagen still, doch jeder Schritt hallte wie ein Verrat durch die Gassen. Ich wagte kaum zu atmen, als wir an den Wachen vorbeischlichen. Mein Bruder hielt meine Hand fest, so fest, dass sie noch jetzt schmerzt — vielleicht, um mich daran zu erinnern, dass wir noch leben.',
        questDetails: [
          {
            questDetailId: '7e7b2983-55b2-40be-a2ca-7d10fa39b9ca',
            questDetailName: 'Fliehe aus der Stadt',
          },
        ],
        questRewards: [{ experience: 100, money: 100 }],
      },
    },
  });

  private _playerSkills = signal<Record<string, PlayerSkill>>({});

  private _playerStorages = signal<Record<string, PlayerStorage>>({
    '1dc7f745-76da-47eb-87b8-d93935efea0f': {
      playerStorageId: '1dc7f745-76da-47eb-87b8-d93935efea0f',
      items: [
        {
          storageItemId: '142235a1-c9a0-4cc9-9c1a-c1ea9acb59fd',
          itemCount: 20,
          itemData: {
            itemId: '57b219ab-85e0-48aa-b77a-fe45794d7db2',
            itemName: 'Kupferbarren',
            itemIcon: 'blacksmith/25.png',
            itemType: ItemType.Commodities,
          },
        },
      ],
    },
  });

  public getPlayerGarden(): PlayerGarden {
    return {
      cultivableFields: Object.values(this._playerGardenFields.asReadonly()()),
    };
  }

  public getPlayerQuests(): PlayerQuest[] {
    return Object.values(this._playerQuests());
  }

  public getExpForGardenCop(
    gardenCropId: string
  ): PlayerSkillExperience | undefined {
    if (!gardenCropId) throw 'Garden Crop id must be provided';
    return this._gardenCropExpTable()[gardenCropId];
  }

  public getPlayerSkills(): PlayerSkill[] {
    return Object.values(this._playerSkills());
  }

  public getPlayerStorages(): PlayerStorage[] {
    return Object.values(this._playerStorages());
  }

  public loadPlayerSkills(): void {
    return;
  }
}
