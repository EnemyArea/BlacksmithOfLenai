namespace PlayFabApi.Models;

public sealed record GardenCrop
{
    public required Guid GardenCropId { get; init; }
    public required string GardenCropName { get; init; }
    public required int Duration { get; init; }
    public required int EnergyCostsPlant { get; init; }
    public required int EnergyCostsHarvest { get; init; }
    public required int EnergyCostsFertilize { get; init; }
    public required int EnergyCostsIrrigation { get; init; }
    public required int EnergyCostsReplant { get; init; }
    public required JobType JobType { get; init; }
    public required int Experience { get; init; }
    public required int JobExperience { get; init; }
}