import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterStatus } from './character-status';

describe('CharacterStatus', () => {
  let component: CharacterStatus;
  let fixture: ComponentFixture<CharacterStatus>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterStatus]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterStatus);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
