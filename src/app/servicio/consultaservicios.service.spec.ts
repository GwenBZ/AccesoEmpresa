import { TestBed } from '@angular/core/testing';

import { ConsultaserviciosService } from './consultaservicios.service';

describe('ConsultaserviciosService', () => {
  let service: ConsultaserviciosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultaserviciosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
