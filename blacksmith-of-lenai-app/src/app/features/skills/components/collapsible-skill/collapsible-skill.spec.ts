import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapsibleSkill } from './collapsible-skill';

describe('CollapsibleSkill', () => {
  let component: CollapsibleSkill;
  let fixture: ComponentFixture<CollapsibleSkill>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollapsibleSkill],
    }).compileComponents();

    fixture = TestBed.createComponent(CollapsibleSkill);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
