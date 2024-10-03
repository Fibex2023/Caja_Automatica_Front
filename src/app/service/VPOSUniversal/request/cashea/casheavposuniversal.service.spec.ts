import { TestBed } from '@angular/core/testing';

import { CasheavposuniversalService } from './casheavposuniversal.service';

describe('CasheavposuniversalService', () => {
  let service: CasheavposuniversalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CasheavposuniversalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
