import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilePaymentPayComponent } from './mobile-payment-pay.component';

describe('MobilePaymentPayComponent', () => {
  let component: MobilePaymentPayComponent;
  let fixture: ComponentFixture<MobilePaymentPayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobilePaymentPayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobilePaymentPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
