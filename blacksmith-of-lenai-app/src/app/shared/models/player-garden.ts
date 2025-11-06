import { JobType } from '../enums/job-type';
import { PlayerSkillExperience } from './player-skill-experience';

export interface PlayerGarden {
  cultivableFields: Record<number, CultivableField>;
}

export interface CultivableField {
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
