import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapsibleTeaser } from './collapsible-teaser';

describe('CollapsibleTeaser', () => {
  let component: CollapsibleTeaser;
  let fixture: ComponentFixture<CollapsibleTeaser>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollapsibleTeaser]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollapsibleTeaser);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
