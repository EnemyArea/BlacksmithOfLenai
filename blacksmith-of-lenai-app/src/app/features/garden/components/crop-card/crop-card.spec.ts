import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CropCard } from './crop-card';

describe('CropCard', () => {
  let component: CropCard;
  let fixture: ComponentFixture<CropCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CropCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CropCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
