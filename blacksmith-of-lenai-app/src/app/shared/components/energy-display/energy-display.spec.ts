import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergyDisplay } from './energy-display';

describe('EnergyDisplay', () => {
  let component: EnergyDisplay;
  let fixture: ComponentFixture<EnergyDisplay>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnergyDisplay]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnergyDisplay);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
