import { TestBed } from '@angular/core/testing';

import { PalabrajuegoService } from './palabrajuego.service';

describe('PalabrajuegoService', () => {
  let service: PalabrajuegoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PalabrajuegoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
