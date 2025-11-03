import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionFooter } from './action-footer';

describe('ActionFooter', () => {
  let component: ActionFooter;
  let fixture: ComponentFixture<ActionFooter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActionFooter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActionFooter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
