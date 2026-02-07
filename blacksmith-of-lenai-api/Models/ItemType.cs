using System.Runtime.Serialization;
using System.Text.Json.Serialization;

namespace PlayFabApi.Models;

[JsonConverter(typeof(JsonStringEnumConverter))]
public enum ItemType
{
    [EnumMember(Value = "Unknown")] Unknown,
    [EnumMember(Value = "Commodities")] Commodities,
    [EnumMember(Value = "Weapons")] Weapons,
    [EnumMember(Value = "Armors")] Armors,
    [EnumMember(Value = "Accessories")] Accessories,
    [EnumMember(Value = "Tools")] Tools
}