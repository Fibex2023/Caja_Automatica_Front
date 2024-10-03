import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasheaPayComponent } from './cashea-pay.component';

describe('CasheaPayComponent', () => {
  let component: CasheaPayComponent;
  let fixture: ComponentFixture<CasheaPayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CasheaPayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CasheaPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
