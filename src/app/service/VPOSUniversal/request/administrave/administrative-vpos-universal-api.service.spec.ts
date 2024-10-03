import { TestBed } from '@angular/core/testing';

import { AdministrativeVposUniversalApiService } from './administrative-vpos-universal-api.service';

describe('AdministrativeVposUniversalApiService', () => {
  let service: AdministrativeVposUniversalApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdministrativeVposUniversalApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
