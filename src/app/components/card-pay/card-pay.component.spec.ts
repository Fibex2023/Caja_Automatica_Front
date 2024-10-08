import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPayComponent } from './card-pay.component';

describe('CardPayComponent', () => {
  let component: CardPayComponent;
  let fixture: ComponentFixture<CardPayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardPayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
