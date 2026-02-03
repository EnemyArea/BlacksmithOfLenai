import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorageTabs } from './storage-tabs';

describe('StorageTabs', () => {
  let component: StorageTabs;
  let fixture: ComponentFixture<StorageTabs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StorageTabs],
    }).compileComponents();

    fixture = TestBed.createComponent(StorageTabs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
