namespace PlayFabApi.Models;

public sealed record QuestReward
{
    public int Experience { get; init; }
    public int Money { get; init; }
}