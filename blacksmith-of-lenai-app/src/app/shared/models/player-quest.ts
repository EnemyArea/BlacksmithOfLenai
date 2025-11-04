import { QuestData } from './quest-data';

export interface PlayerQuest {
  questData: QuestData;
  isCompleted: boolean;
  completedQuestDetails: string[]; // List of IDs
}
