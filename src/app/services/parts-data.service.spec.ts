import { TestBed } from '@angular/core/testing';

import { PartsDataService } from './parts-data.service';

describe('PartsDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PartsDataService = TestBed.get(PartsDataService);
    expect(service).toBeTruthy();
  });
});
