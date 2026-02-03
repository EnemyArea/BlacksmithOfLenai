import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestCardRewards } from './quest-card-rewards';

describe('QuestCardRewards', () => {
  let component: QuestCardRewards;
  let fixture: ComponentFixture<QuestCardRewards>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuestCardRewards],
    }).compileComponents();

    fixture = TestBed.createComponent(QuestCardRewards);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
