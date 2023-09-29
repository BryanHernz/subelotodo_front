import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentsEditDataComponent } from './payments-edit-data.component';

describe('PaymentsEditDataComponent', () => {
  let component: PaymentsEditDataComponent;
  let fixture: ComponentFixture<PaymentsEditDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentsEditDataComponent]
    });
    fixture = TestBed.createComponent(PaymentsEditDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
