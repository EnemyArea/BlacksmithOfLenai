import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CropStatus } from './crop-status-bar';

describe('CropStatus', () => {
  let component: CropStatus;
  let fixture: ComponentFixture<CropStatus>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CropStatus],
    }).compileComponents();

    fixture = TestBed.createComponent(CropStatus);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
