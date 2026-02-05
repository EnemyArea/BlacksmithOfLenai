import {
  PlayerGardenField as ServerPlayerGardenField,
  GardenCrop as ServerGardenCrop,
  JobType as ServerJobType,
} from '../../../api-generated';
import { GardenCropData, PlayerGardenField } from './garden.models';
import { JobType } from '../../../shared/enums/job-type';

export function mapPlayerGardenFields(
  serverFields: ServerPlayerGardenField[]
): PlayerGardenField[] {
  return serverFields.map(mapPlayerGardenField);
}

export function mapPlayerGardenField(
  serverPlayerGardenField: ServerPlayerGardenField
): PlayerGardenField {
  return {
    playerGardenFieldId: serverPlayerGardenField.playerGardenFieldId,
    fieldIndex: serverPlayerGardenField.fieldIndex,
    timePassed: serverPlayerGardenField.timePassed,
    isPurchased: serverPlayerGardenField.isPurchased,
    isIrrigated: serverPlayerGardenField.isIrrigated,
    isFertilized: serverPlayerGardenField.isFertilized,
    price: serverPlayerGardenField.price,
    gardenCrop: mapGardenCrop(serverPlayerGardenField.gardenCrop),
  };
}

export function mapGardenCrop(
  serverGardenCrop?: ServerGardenCrop
): GardenCropData | undefined {
  if (!serverGardenCrop) {
    return undefined;
  }

  return {
    gardenCropId: serverGardenCrop.gardenCropId,
    gardenCropName: serverGardenCrop.gardenCropName,
    duration: serverGardenCrop.duration,
    energyCostsPlant: serverGardenCrop.energyCostsPlant,
    energyCostsHarvest: serverGardenCrop.energyCostsHarvest,
    energyCostsFertilize: serverGardenCrop.energyCostsFertilize,
    energyCostsIrrigation: serverGardenCrop.energyCostsIrrigation,
    energyCostsReplant: serverGardenCrop.energyCostsReplant,
    jobType: mapJobType(serverGardenCrop.jobType),
    experience: serverGardenCrop.experience,
    jobExperience: serverGardenCrop.jobExperience,
  };
}

export function mapJobType(serverJobType: ServerJobType): JobType {
  const mapping: Record<ServerJobType, JobType> = {
    [ServerJobType.HerbCollector]: JobType.HerbCollector,
    [ServerJobType.Lumberjack]: JobType.Lumberjack,
    [ServerJobType.BlackSmith]: JobType.BlackSmith,
    [ServerJobType.Miner]: JobType.Miner,
  };

  return mapping[serverJobType] || JobType.HerbCollector;
}
