import { PlayerSkillExperience, SkillPerk } from '../../../api-generated';

export interface PlayerSkill {
  playerSkillId: string;
  skillName: string;
  skillLevel: number;
  currentSkillExp: number;
  playerSkillExperience: PlayerSkillExperience;
  skillPerks: SkillPerk[];
}
