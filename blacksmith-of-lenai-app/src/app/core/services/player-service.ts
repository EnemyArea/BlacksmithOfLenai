import { inject, Injectable, signal } from '@angular/core';
import { PlayerSkillExperience } from '../../shared/models/player-skill-experience';
import { PlayerGardenField } from '../../shared/models/player-garden';
import { PlayerQuest } from '../../shared/models/player-quest';
import { PlayerSkill } from '../../shared/models/player-skill';
import { PlayerStorage } from '../../shared/models/player-storage';
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

  private _playerGardenFields = signal<Record<string, PlayerGardenField>>({});
  private _playerQuests = signal<Record<string, PlayerQuest>>({});
  private _playerSkills = signal<Record<string, PlayerSkill>>({});
  private _playerStorages = signal<Record<string, PlayerStorage>>({});

  getExpForGardenCop(gardenCropId: string): PlayerSkillExperience | undefined {
    if (!gardenCropId) throw 'Garden Crop id must be provided';
    return this._gardenCropExpTable()[gardenCropId];
  }

  getPlayerGardenFields(): PlayerGardenField[] {
    return Object.values(this._playerGardenFields());
  }

  getPlayerQuests(): PlayerQuest[] {
    return Object.values(this._playerQuests());
  }

  getPlayerSkills() {
    return Object.values(this._playerSkills());
  }

  getPlayerStorages() {
    return Object.values(this._playerStorages());
  }

  loadPlayerSkills() {
    this.gameClient.loadDataListFromGameApi<PlayerSkill>(
      'player-skills',
      'playerSkillId',
      data => {
        this._playerSkills.set(data);
      }
    );
  }

  loadPlayerStorage() {
    this.gameClient.loadDataListFromGameApi<PlayerStorage>(
      'player-storages',
      'playerStorageId',
      data => {
        this._playerStorages.set(data);
      }
    );
  }

  loadPlayerQuests() {
    this.gameClient.loadDataListFromGameApi<PlayerQuest>(
      'player-quests',
      'playerQuestId',
      data => {
        this._playerQuests.set(data);
      }
    );
  }

  loadPlayerGardenFields() {
    this.gameClient.loadDataListFromGameApi<PlayerGardenField>(
      'player-garden',
      'playerGardenFieldId',
      data => {
        this._playerGardenFields.set(data);
      }
    );
  }
}
