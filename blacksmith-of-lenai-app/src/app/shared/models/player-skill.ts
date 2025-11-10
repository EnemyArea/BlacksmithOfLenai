import { SkillPerkData } from './skill-perk-data';
import { PlayerSkillExperience } from './player-skill-experience';

export interface PlayerSkill {
  playerSkillId: string;
  skillName: string;
  skillLevel: number;
  currentSkillExp: number;
  skillPerks: SkillPerkData[];
  playerSkillExperience: PlayerSkillExperience;
}
