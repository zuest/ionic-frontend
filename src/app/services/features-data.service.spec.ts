import { TestBed } from '@angular/core/testing';

import { FeaturesDataService } from './features-data.service';

describe('FeaturesDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FeaturesDataService = TestBed.get(FeaturesDataService);
    expect(service).toBeTruthy();
  });
});
