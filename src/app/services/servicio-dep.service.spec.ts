import { TestBed } from '@angular/core/testing';

import { ServicioDepService } from './servicio-dep.service';

describe('ServicioDepService', () => {
  let service: ServicioDepService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioDepService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
