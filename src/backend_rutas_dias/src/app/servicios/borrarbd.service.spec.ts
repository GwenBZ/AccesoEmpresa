import { TestBed } from '@angular/core/testing';

import { BorrarbdService } from './borrarbd.service';

describe('BorrarbdService', () => {
  let service: BorrarbdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BorrarbdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
