import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterItems } from './character-items';

describe('CharacterItems', () => {
  let component: CharacterItems;
  let fixture: ComponentFixture<CharacterItems>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterItems],
    }).compileComponents();

    fixture = TestBed.createComponent(CharacterItems);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
