import { PlayerQuest as ServerPlayerQuest } from '../../../api-generated';
import { PlayerQuest } from './quests.models';

export function mapPlayerQuests(servers: ServerPlayerQuest[]): PlayerQuest[] {
  return servers.map(mapPlayerQuest);
}

export function mapPlayerQuest(
  serverPlayerQuest: ServerPlayerQuest
): PlayerQuest {
  return {
    completedQuestDetails: serverPlayerQuest.completedQuestDetails,
    isCompleted: serverPlayerQuest.isCompleted,
    questData: serverPlayerQuest.questData,
    playerQuestId: serverPlayerQuest.playerQuestId,
  };
}
