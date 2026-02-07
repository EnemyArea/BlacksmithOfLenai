using System.Runtime.Serialization;
using System.Text.Json.Serialization;

namespace PlayFabApi.Models;

[JsonConverter(typeof(JsonStringEnumConverter))]
public enum CropStatus
{
    [EnumMember(Value = "Unknown")] Unknown,
    [EnumMember(Value = "Water")] Water,
    [EnumMember(Value = "Fertilizer")] Fertilizer
}