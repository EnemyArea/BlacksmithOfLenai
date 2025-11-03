import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Forge } from './forge';

describe('Forge', () => {
  let component: Forge;
  let fixture: ComponentFixture<Forge>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Forge],
    }).compileComponents();

    fixture = TestBed.createComponent(Forge);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
