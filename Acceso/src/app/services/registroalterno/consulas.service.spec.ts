import { TestBed } from '@angular/core/testing';

import { ConsulasService } from './consulas.service';

describe('ConsulasService', () => {
  let service: ConsulasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsulasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
