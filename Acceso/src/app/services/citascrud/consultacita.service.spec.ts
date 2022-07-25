import { TestBed } from '@angular/core/testing';

import { ConsultacitaService } from './consultacita.service';

describe('ConsultacitaService', () => {
  let service: ConsultacitaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultacitaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
