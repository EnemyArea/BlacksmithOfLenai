namespace PlayFabApi.Models;

public sealed record PlayerGardenField
{
    public required Guid PlayerGardenFieldId { get; init; }
    public required int FieldIndex { get; init; }
    public required bool IsPurchased { get; init; }
    public required bool IsIrrigated { get; init; }
    public required bool IsFertilized { get; init; }
    public required int Price { get; init; }
    public required int TimePassed { get; init; }
    public required GardenCrop GardenCrop { get; init; }
}