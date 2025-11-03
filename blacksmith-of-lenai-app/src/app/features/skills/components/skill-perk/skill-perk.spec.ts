import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillPerk } from './skill-perk';

describe('SkillPerk', () => {
  let component: SkillPerk;
  let fixture: ComponentFixture<SkillPerk>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillPerk],
    }).compileComponents();

    fixture = TestBed.createComponent(SkillPerk);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
