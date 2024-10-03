import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashPayComponent } from './cash-pay.component';

describe('CashPayComponent', () => {
  let component: CashPayComponent;
  let fixture: ComponentFixture<CashPayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CashPayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CashPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
