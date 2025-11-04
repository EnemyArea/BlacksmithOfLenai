import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestTabs } from './quest-tabs';

describe('QuestTabs', () => {
  let component: QuestTabs;
  let fixture: ComponentFixture<QuestTabs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuestTabs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestTabs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
