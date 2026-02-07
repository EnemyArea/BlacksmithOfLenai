using Microsoft.AspNetCore.Mvc;
using PlayFabApi.Models;

namespace PlayFabApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class PlayerController : ControllerBase
{
    // --- Player Skills ---
    private static readonly List<PlayerSkill> Skills =
    [
        new()
        {
            PlayerSkillId = Guid.Parse("f2543818-ac13-41b5-a82c-773898346807"),
            SkillName = "Kräuterkunde",
            SkillLevel = 4,
            CurrentSkillExp = 0,
            PlayerSkillExperience = new PlayerSkillExperience
            {
                PlayerSkillExperienceId = Guid.Parse("74a9a90d-b709-4ca8-954a-841612803fa5"),
                CurrentExp = 0,
                CurrentLevel = 1,
                NextLevelExp = 1,
                MaxLevel = 10
            },
            SkillPerks =
            [
                new SkillPerk
                {
                    SkillPerkId = Guid.Parse("f3010fee-cc7f-4e6a-bdf5-81caf1de8d87"),
                    SkillPerkName = "Kräuterkundiger",
                    SkillPerkDescription = "Du kannst nun Kräute bis Stufe 2 finden.",
                    SkillPerkIcon = "lavenders-6482579_640.jpg"
                },

                new SkillPerk
                {
                    SkillPerkId = Guid.Parse("575b9657-32f1-4515-ba6f-3f3f5cbf4098"),
                    SkillPerkName = "Kräuterexperte",
                    SkillPerkDescription =
                        "Du kannst nun Kräuter bis Stufe 4 finden und hast die Chance ein weiteres zu sammeln.",
                    SkillPerkIcon = "moroccan-mint-2396530_640.jpg"
                }
            ]
        }
    ];

    // --- Player Storage ---
    private static readonly List<PlayerStorage> Storages =
    [
        new()
        {
            PlayerStorageId = Guid.Parse("1dc7f745-76da-47eb-87b8-d93935efea0f"),
            Items =
            [
                new PlayerStorageItem()
                {
                    StorageItemId = Guid.Parse("142235a1-c9a0-4cc9-9c1a-c1ea9acb59fd"),
                    ItemCount = 20,
                    ItemData = new ItemData
                    {
                        ItemId = Guid.Parse("57b219ab-85e0-48aa-b77a-fe45794d7db2"),
                        ItemName = "Kupferbarren",
                        ItemIcon = "blacksmith/25.png",
                        ItemType = ItemType.Commodities
                    }
                }
            ]
        }
    ];

    // --- Player Quests ---
    private static readonly List<PlayerQuest> Quests =
    [
        new()
        {
            PlayerQuestId = Guid.Parse("0a7a100c-ed1c-4628-aed1-fc018498e019"),
            IsCompleted = false,
            CompletedQuestDetails =
            [
            ],
            QuestData = new QuestData
            {
                QuestId = Guid.Parse("6a6e354d-c8cb-4ab0-b4da-2f448687ad7f"),
                QuestName = "8. Tag des Erntemondes",
                IsMainQuest = true,
                QuestDescription =
                    "Endlich haben wir den Wald erreicht. Die Dunkelheit war gnädig und hat unsere Spuren verschluckt. Mein Bruder schlief unruhig, das Feuer flackerte schwach und war kaum mehr als ein tröstender Funke in all der Finsternis. Ich kann den Wind durch die alten Bäume hören – als würde er unsere Flucht belauschen. Wir haben nur das Nötigste bei uns. Ein paar Stücke Brot, die alte Decke, und Mut, der langsam schwindet. Doch hier, fern von all dem Lärm und den Suchtrupps, spüre ich zum ersten Mal seit Tagen einen Hauch von Frieden. Wenn der Morgen kommt, werden wir tiefer in den Wald ziehen. Vielleicht finden wir einen Ort, den niemand kennt. Einen Ort, den wir „Zuhause“ nennen können.",
                QuestDetails =
                [
                    new QuestDetail
                    {
                        QuestDetailId = Guid.Parse("92035917-6cde-4add-b7dd-6f8e239fb37d"),
                        QuestDetailName = "Überlebe die Nacht"
                    },

                    new QuestDetail
                    {
                        QuestDetailId = Guid.Parse("320929ce-266a-438b-b776-6f6575ccd3bb"),
                        QuestDetailName = "Finde ein neues Zuhause"
                    }
                ],
                QuestRewards =
                [
                    new QuestReward { Experience = 120, Money = 0 }
                ]
            }
        },

        new()
        {
            PlayerQuestId = Guid.Parse("3be76117-7118-46ee-9a60-518bf327f840"),
            IsCompleted = true,
            CompletedQuestDetails =
            [
                Guid.Parse("7e7b2983-55b2-40be-a2ca-7d10fa39b9ca")
            ],
            QuestData = new QuestData
            {
                QuestId = Guid.Parse("35303ed0-d522-4535-bb1d-ce3fe1020031"),
                QuestName = "7. Tag des Erntemondes",
                IsMainQuest = true,
                QuestDescription =
                    "Wir haben die Stadt hinter uns gelassen. Die Straßen lagen still, doch jeder Schritt hallte wie ein Verrat durch die Gassen. Ich wagte kaum zu atmen, als wir an den Wachen vorbeischlichen. Mein Bruder hielt meine Hand fest, so fest, dass sie noch jetzt schmerzt — vielleicht, um mich daran zu erinnern, dass wir noch leben.",
                QuestDetails =
                [
                    new QuestDetail
                    {
                        QuestDetailId = Guid.Parse("7e7b2983-55b2-40be-a2ca-7d10fa39b9ca"),
                        QuestDetailName = "Fliehe aus der Stadt"
                    }
                ],
                QuestRewards =
                [
                    new QuestReward { Experience = 100, Money = 100 }
                ]
            }
        }
    ];

    // --- Player Garden ---
    private static readonly List<PlayerGardenField> Gardens =
    [
        new()
        {
            PlayerGardenFieldId = Guid.Parse("035a77e2-8848-4035-b8d6-d8ec71681499"),
            FieldIndex = 4,
            IsPurchased = true,
            IsIrrigated = false,
            IsFertilized = false,
            Price = 0,
            TimePassed = 10,
            GardenCrop = new GardenCrop
            {
                GardenCropId = Guid.Parse("dc2aa218-c368-46eb-a7a2-ad356d624b6e"),
                GardenCropName = "Unkraut",
                Duration = 180,
                EnergyCostsPlant = 2,
                EnergyCostsHarvest = 2,
                EnergyCostsFertilize = 2,
                EnergyCostsIrrigation = 2,
                EnergyCostsReplant = 2,
                JobType = JobType.HerbCollector,
                Experience = 100,
                JobExperience = 100
            }
        }
    ];

    // --- Player Skill Experience Table ---
    private static readonly List<PlayerSkillExperience> SkillExperienceTable =
    [
        new()
        {
            PlayerSkillExperienceId = Guid.Parse("dc2aa218-c368-46eb-a7a2-ad356d624b6e"),
            CurrentExp = 10,
            NextLevelExp = 20,
            CurrentLevel = 1,
            MaxLevel = 10
        }
    ];

    // --- Endpoints ---
    [HttpGet("skills")]
    public IActionResult GetSkills()
    {
        return Ok(Skills);
    }

    [HttpGet("storages")]
    public IActionResult GetStorages()
    {
        return Ok(Storages);
    }

    [HttpGet("quests")]
    public IActionResult GetQuests()
    {
        return Ok(Quests);
    }

    [HttpGet("gardens")]
    public IActionResult GetGardens()
    {
        return Ok(Gardens);
    }

    [HttpGet("skill-experience-table")]
    public IActionResult GetSkillExperienceTable()
    {
        return Ok(SkillExperienceTable);
    }
}