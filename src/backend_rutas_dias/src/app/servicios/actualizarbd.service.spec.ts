import { TestBed } from '@angular/core/testing';

import { ActualizarbdService } from './actualizarbd.service';

describe('ActualizarbdService', () => {
  let service: ActualizarbdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActualizarbdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
