import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MineVeinCard } from './mine-vein-card';

describe('MineVeinCard', () => {
  let component: MineVeinCard;
  let fixture: ComponentFixture<MineVeinCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MineVeinCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MineVeinCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
