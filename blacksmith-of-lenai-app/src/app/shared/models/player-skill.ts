import { SkillPerkData } from './skill-perk-data';

export interface PlayerSkill {
  playerSkillId: string;
  skillName: string;
  skillLevel: number;
  currentSkillExp: number;
  skillPerks: SkillPerkData[];
}
