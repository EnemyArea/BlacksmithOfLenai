import { PlayerStorage as ServerPlayerStorage } from '../../../api-generated';
import { PlayerStorage } from './storages.models';

export function mapPlayerStorages(
  servers: ServerPlayerStorage[]
): PlayerStorage[] {
  return servers.map(mapPlayerStorage);
}

export function mapPlayerStorage(
  serverPlayerStorage: ServerPlayerStorage
): PlayerStorage {
  return {
    items: [],
    playerStorageId: serverPlayerStorage.playerStorageId,
  };
}
