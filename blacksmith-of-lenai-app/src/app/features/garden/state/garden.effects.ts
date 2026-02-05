import { Actions, createEffect, ofType } from '@ngrx/effects';
import { inject } from '@angular/core';
import { PlayerGardenActions } from './garden.actions';
import { catchError, map, of, switchMap } from 'rxjs';
import {
  DefaultService,
  PlayerGardenField as ServerPlayerGardenField,
  GardenCrop as ServerGardenCrop,
  JobType as ServerJobType,
} from '../../../api-generated';
import { GardenCropData, PlayerGardenField } from './garden.models';
import { JobType } from '../../../shared/enums/job-type';

function mapPlayerGardenFields(
  serverFields: ServerPlayerGardenField[]
): PlayerGardenField[] {
  return serverFields.map(mapPlayerGardenField);
}

function mapPlayerGardenField(
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

function mapGardenCrop(
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

export const loadPlayerGarden = createEffect(
  (actions$ = inject(Actions), gameService = inject(DefaultService)) => {
    return actions$.pipe(
      ofType(PlayerGardenActions.loadPlayerGarden),
      switchMap(() =>
        gameService.playerGardenGet().pipe(
          map(fields =>
            PlayerGardenActions.loadPlayerGardenSuccess({
              playerGardenFields: mapPlayerGardenFields(fields),
            })
          ),
          catchError(error => {
            console.error('Garden-API-Error:', error);
            return of(
              PlayerGardenActions.loadPlayerGardenFailure({
                error: error.message || 'Unknown Garden-API-Error',
              })
            );
          })
        )
      )
    );
  },
  { functional: true }
);

export const playerGardenEffects = { loadPlayerGarden };
