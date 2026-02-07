using System.Runtime.Serialization;
using System.Text.Json.Serialization;

namespace PlayFabApi.Models;

[JsonConverter(typeof(JsonStringEnumConverter))]
public enum JobType
{
    [EnumMember(Value = "Unknown")] Unknown,
    [EnumMember(Value = "HerbCollector")] HerbCollector,
    [EnumMember(Value = "Lumberjack")] Lumberjack,
    [EnumMember(Value = "BlackSmith")] BlackSmith,
    [EnumMember(Value = "Miner")] Miner
}