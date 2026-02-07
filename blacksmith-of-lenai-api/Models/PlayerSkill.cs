namespace PlayFabApi.Models;

public sealed record PlayerSkill
{
    public required Guid PlayerSkillId { get; init; }
    public required string SkillName { get; init; }
    public required int SkillLevel { get; init; }
    public required int CurrentSkillExp { get; init; }
    public required PlayerSkillExperience PlayerSkillExperience { get; init; }
    public required List<SkillPerk> SkillPerks { get; init; }
}