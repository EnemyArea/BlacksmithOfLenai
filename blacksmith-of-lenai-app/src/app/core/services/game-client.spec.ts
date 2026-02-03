import { TestBed } from '@angular/core/testing';

import { GameClient } from './game-client';

describe('GameClient', () => {
  let service: GameClient;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
