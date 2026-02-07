namespace PlayFabApi.Models;

public sealed record PlayerQuest
{
    public required Guid PlayerQuestId { get; init; }
    public required bool IsCompleted { get; init; }
    public required List<Guid> CompletedQuestDetails { get; init; }
    public required QuestData QuestData { get; init; }
}