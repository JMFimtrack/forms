import { TestBed } from '@angular/core/testing';

import { BurnDataService } from './burn-data.service';

describe('BurnDataService', () => {
  let service: BurnDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BurnDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
