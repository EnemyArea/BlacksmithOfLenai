import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorageToolbar } from './storage-toolbar';

describe('StorageToolbar', () => {
  let component: StorageToolbar;
  let fixture: ComponentFixture<StorageToolbar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StorageToolbar],
    }).compileComponents();

    fixture = TestBed.createComponent(StorageToolbar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
