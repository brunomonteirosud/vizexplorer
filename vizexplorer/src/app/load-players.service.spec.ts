import { TestBed, inject } from '@angular/core/testing';

import { LoadPlayersService } from './load-players.service';

describe('LoadPlayersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoadPlayersService]
    });
  });

  it('should be created', inject([LoadPlayersService], (service: LoadPlayersService) => {
    expect(service).toBeTruthy();
  }));
});
