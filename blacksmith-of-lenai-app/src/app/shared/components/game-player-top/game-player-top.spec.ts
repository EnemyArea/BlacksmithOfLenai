import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamePlayerTop } from './game-player-top';

describe('GamePlayerTop', () => {
  let component: GamePlayerTop;
  let fixture: ComponentFixture<GamePlayerTop>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GamePlayerTop],
    }).compileComponents();

    fixture = TestBed.createComponent(GamePlayerTop);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
