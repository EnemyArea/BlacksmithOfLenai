import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterTools } from './character-tools';

describe('CharacterTools', () => {
  let component: CharacterTools;
  let fixture: ComponentFixture<CharacterTools>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterTools]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterTools);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
