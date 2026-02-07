namespace PlayFabApi.Models;

public sealed record SkillPerk
{
    public required Guid SkillPerkId { get; init; }
    public required string SkillPerkName { get; init; }
    public required string SkillPerkDescription { get; init; }
    public required string SkillPerkIcon { get; init; }
}