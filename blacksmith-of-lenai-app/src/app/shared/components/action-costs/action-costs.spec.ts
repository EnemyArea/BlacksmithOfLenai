import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionCosts } from './action-costs';

describe('ActionCosts', () => {
  let component: ActionCosts;
  let fixture: ComponentFixture<ActionCosts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActionCosts],
    }).compileComponents();

    fixture = TestBed.createComponent(ActionCosts);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
