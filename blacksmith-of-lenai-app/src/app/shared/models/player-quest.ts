import { QuestData } from './quest-data';

export interface PlayerQuest {
  playerQuestId: string;
  questData: QuestData;
  isCompleted: boolean;
  completedQuestDetails: string[]; // List of IDs
}
