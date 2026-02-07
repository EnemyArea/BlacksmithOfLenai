namespace PlayFabApi.Models;

public sealed record PlayerStorage
{
    public required Guid PlayerStorageId { get; init; }
    public required List<PlayerStorageItem> Items { get; init; }
}