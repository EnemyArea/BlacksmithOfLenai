import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillRating } from './skill-rating';

describe('SkillRating', () => {
  let component: SkillRating;
  let fixture: ComponentFixture<SkillRating>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillRating]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillRating);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
