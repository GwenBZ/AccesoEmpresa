import { TestBed } from '@angular/core/testing';

import { ServicioDepServiceService } from './servicio-dep-service.service';

describe('ServicioDepServiceService', () => {
  let service: ServicioDepServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioDepServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
