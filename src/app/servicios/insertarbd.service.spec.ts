import { TestBed } from '@angular/core/testing';

import { InsertarbdService } from './insertarbd.service';

describe('InsertarbdService', () => {
  let service: InsertarbdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InsertarbdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
