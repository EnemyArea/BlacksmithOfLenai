namespace PlayFabApi.Models;

public sealed record PlayerStorageItem
{
    public required Guid StorageItemId { get; init; }
    public required int ItemCount { get; init; }
    public required ItemData ItemData { get; init; }
}