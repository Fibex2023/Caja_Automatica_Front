import { TestBed } from '@angular/core/testing';

import { VPOSUniversalApiService } from './vposuniversal-api.service';

describe('VPOSUniversalApiService', () => {
  let service: VPOSUniversalApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VPOSUniversalApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
