namespace PlayFabApi.Models;

public sealed record QuestDetail
{
    public required Guid QuestDetailId { get; init; }
    public required string QuestDetailName { get; init; }
}