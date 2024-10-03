import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePaymentsComponent } from './home-payments.component';

describe('HomePaymentsComponent', () => {
  let component: HomePaymentsComponent;
  let fixture: ComponentFixture<HomePaymentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomePaymentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
