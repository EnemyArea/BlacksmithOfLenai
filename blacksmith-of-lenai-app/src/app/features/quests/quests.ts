import { Component } from '@angular/core';
import { PageHeadline } from '../../shared/components/page-headline/page-headline';
import { QuestTabs } from './components/quest-tabs/quest-tabs';
import { QuestCard } from './components/quest-card/quest-card';
import { PlayerQuest } from '../../shared/models/player-quest';

@Component({
  selector: 'app-quests',
  imports: [PageHeadline, QuestTabs, QuestCard],
  templateUrl: './quests.html',
  styleUrl: './quests.css',
})
export class Quests {
  playerQuests: PlayerQuest[] = [
    {
      isCompleted: false,
      completedQuestDetails: [],
      questData: {
        questId: '6a6e354d-c8cb-4ab0-b4da-2f448687ad7f',
        questName: '8. Tag des Erntemondes',
        isMainQuest: true,
        questDescription:
          'Endlich haben wir den Wald erreicht. Die Dunkelheit war gnädig und hat unsere Spuren verschluckt. Mein Bruder schlief unruhig, das Feuer flackerte schwach und war kaum mehr als ein tröstender Funke in all der Finsternis. Ich kann den Wind durch die alten Bäume hören – als würde er unsere Flucht belauschen. Wir haben nur das Nötigste bei uns. Ein paar Stücke Brot, die alte Decke, und Mut, der langsam schwindet. Doch hier, fern von all dem Lärm und den Suchtrupps, spüre ich zum ersten Mal seit Tagen einen Hauch von Frieden. Wenn der Morgen kommt, werden wir tiefer in den Wald ziehen. Vielleicht finden wir einen Ort, den niemand kennt. Einen Ort, den wir „Zuhause“ nennen können.',
        questDetails: [
          {
            questDetailId: '92035917-6cde-4add-b7dd-6f8e239fb37d',
            questDetailName: 'Überlebe die Nacht',
          },
          {
            questDetailId: '320929ce-266a-438b-b776-6f6575ccd3bb',
            questDetailName: 'Finde ein neues Zuhause',
          },
        ],
        questRewards: [{ experience: 120 }],
      },
    },
    {
      isCompleted: true,
      completedQuestDetails: ['7e7b2983-55b2-40be-a2ca-7d10fa39b9ca'],
      questData: {
        questId: '35303ed0-d522-4535-bb1d-ce3fe1020031',
        questName: '7. Tag des Erntemondes',
        isMainQuest: true,
        questDescription:
          'Wir haben die Stadt hinter uns gelassen. Die Straßen lagen still, doch jeder Schritt hallte wie ein Verrat durch die Gassen. Ich wagte kaum zu atmen, als wir an den Wachen vorbeischlichen. Mein Bruder hielt meine Hand fest, so fest, dass sie noch jetzt schmerzt — vielleicht, um mich daran zu erinnern, dass wir noch leben.',
        questDetails: [
          {
            questDetailId: '7e7b2983-55b2-40be-a2ca-7d10fa39b9ca',
            questDetailName: 'Fliehe aus der Stadt',
          },
        ],
        questRewards: [{ experience: 100, money: 100 }],
      },
    },
  ];
}
