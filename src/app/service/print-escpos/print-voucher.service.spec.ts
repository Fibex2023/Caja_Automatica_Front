import { TestBed } from '@angular/core/testing';

import { PrintVoucherService } from './print-voucher.service';

describe('PrintVoucherService', () => {
  let service: PrintVoucherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrintVoucherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
