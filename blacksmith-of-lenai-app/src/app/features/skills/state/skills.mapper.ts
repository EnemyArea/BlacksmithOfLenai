import { PlayerSkill as ServerPlayerSkill } from '../../../api-generated';
import { PlayerSkill } from './skills.models';

export function mapPlayerSkills(servers: ServerPlayerSkill[]): PlayerSkill[] {
  return servers.map(mapPlayerSkill);
}

export function mapPlayerSkill(
  serverPlayerSkill: ServerPlayerSkill
): PlayerSkill {
  return {
    currentSkillExp: serverPlayerSkill.currentSkillExp,
    playerSkillExperience: serverPlayerSkill.playerSkillExperience,
    skillLevel: serverPlayerSkill.skillLevel,
    skillName: serverPlayerSkill.skillName,
    skillPerks: serverPlayerSkill.skillPerks,
    playerSkillId: serverPlayerSkill.playerSkillId,
  };
}
