export interface QuestData {
  questId: string;
  questName: string;
  questDescription: string;
  isMainQuest: boolean;
  questDetails: QuestDetailData[];
  questRewards: QuestRewardData[];
}

export interface QuestDetailData {
  questDetailId: string;
  questDetailName: string;
}

export interface QuestRewardData {
  experience?: number;
  money?: number;
}
