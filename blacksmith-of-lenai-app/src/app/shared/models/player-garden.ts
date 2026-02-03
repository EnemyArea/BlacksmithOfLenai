import { JobType } from '../enums/job-type';
import { PlayerSkillExperience } from './player-skill-experience';

export interface PlayerGardenField {
  playerGardenFieldId: string;
  fieldIndex: number;
  isPurchased: boolean;
  isIrrigated: boolean;
  isFertilized: boolean;
  price: number;
  timePassed: number;
  gardenCrop?: GardenCropData;
  playerSkillExperience?: PlayerSkillExperience;
}

export interface GardenCropData {
  gardenCropId: string;
  gardenCropName: string;
  energyCostsPlant: number;
  energyCostsHarvest: number;
  energyCostsFertilize: number;
  energyCostsIrrigation: number;
  energyCostsReplant: number;
  duration: number;
  experience: number;
  jobType: JobType;
  jobExperience: number;
}

export interface GardenField {
  fieldIndex: number;
  isPurchased: boolean;
  isIrrigated: boolean;
  isFertilized: boolean;
  price: number;
  timePassed?: number;
  playerGardenFieldId?: string;
  gardenCrop?: GardenCropData;
  playerSkillExperience?: PlayerSkillExperience;
}
