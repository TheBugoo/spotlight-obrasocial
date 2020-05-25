import { TestBed } from '@angular/core/testing';

import { PasajeservicioService } from './pasajeservicio.service';

describe('PasajeservicioService', () => {
  let service: PasajeservicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PasajeservicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
