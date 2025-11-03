import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionCardDialog } from './action-card-dialog';

describe('ActionCardDialog', () => {
  let component: ActionCardDialog;
  let fixture: ComponentFixture<ActionCardDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActionCardDialog],
    }).compileComponents();

    fixture = TestBed.createComponent(ActionCardDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
