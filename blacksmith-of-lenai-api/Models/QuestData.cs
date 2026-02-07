namespace PlayFabApi.Models;

public sealed record QuestData
{
    public required Guid QuestId { get; init; }
    public required string QuestName { get; init; }
    public required bool IsMainQuest { get; init; }
    public required string QuestDescription { get; init; }
    public required List<QuestDetail> QuestDetails { get; init; }
    public required List<QuestReward> QuestRewards { get; init; }
}