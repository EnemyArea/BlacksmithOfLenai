namespace PlayFabApi.Models;

public sealed record ItemData
{
    public required Guid ItemId { get; init; }
    public required string ItemName { get; init; }
    public required string ItemIcon { get; init; }
    public required ItemType ItemType { get; init; }
}