import { TestBed } from '@angular/core/testing';

import { ConsultabdService } from './consultabd.service';

describe('ConsultabdService', () => {
  let service: ConsultabdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultabdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
