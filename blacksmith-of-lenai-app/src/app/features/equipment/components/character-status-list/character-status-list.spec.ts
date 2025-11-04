import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterStatusList } from './character-status-list';

describe('CharacterStatusList', () => {
  let component: CharacterStatusList;
  let fixture: ComponentFixture<CharacterStatusList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterStatusList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterStatusList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
