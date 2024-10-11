import { TestBed } from '@angular/core/testing';

import { VauchersPrintServicesService } from './vauchers-print-services.service';

describe('VauchersPrintServicesService', () => {
  let service: VauchersPrintServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VauchersPrintServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
