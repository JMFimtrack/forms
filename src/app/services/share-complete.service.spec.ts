import { TestBed } from '@angular/core/testing';

import { ShareCompleteService } from './share-complete.service';

describe('ShareCompleteService', () => {
  let service: ShareCompleteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShareCompleteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
