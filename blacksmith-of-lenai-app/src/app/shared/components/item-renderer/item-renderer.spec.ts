import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemRenderer } from './item-renderer';

describe('ItemRenderer', () => {
  let component: ItemRenderer;
  let fixture: ComponentFixture<ItemRenderer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemRenderer],
    }).compileComponents();

    fixture = TestBed.createComponent(ItemRenderer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
