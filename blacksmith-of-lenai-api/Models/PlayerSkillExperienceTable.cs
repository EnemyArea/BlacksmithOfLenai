namespace PlayFabApi.Models;

public sealed record PlayerSkillExperienceTable
{
    public required Guid PlayerSkillExperienceId { get; init; }
    public required int CurrentExp { get; init; }
    public required int NextLevelExp { get; init; }
    public required int CurrentLevel { get; init; }
    public required int MaxLevel { get; init; }
}