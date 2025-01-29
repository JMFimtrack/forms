import { TestBed } from '@angular/core/testing';

import { DataSheetsService } from './data-sheets.service';

describe('DataSheetsService', () => {
  let service: DataSheetsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataSheetsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
