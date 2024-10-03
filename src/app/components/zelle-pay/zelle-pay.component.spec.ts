import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZellePayComponent } from './zelle-pay.component';

describe('ZellePayComponent', () => {
  let component: ZellePayComponent;
  let fixture: ComponentFixture<ZellePayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZellePayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZellePayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
