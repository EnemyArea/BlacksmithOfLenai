import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestCardDetails } from './quest-card-details';

describe('QuestCardDetails', () => {
  let component: QuestCardDetails;
  let fixture: ComponentFixture<QuestCardDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuestCardDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestCardDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
