import { QuestData } from '../../../shared/models/quest-data';

export interface PlayerQuest {
  playerQuestId: string;
  isCompleted: boolean;
  completedQuestDetails: string[];
  questData: QuestData;
}
