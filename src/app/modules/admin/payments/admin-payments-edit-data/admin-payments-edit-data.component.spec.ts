import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPaymentsEditDataComponent } from './admin-payments-edit-data.component';

describe('AdminPaymentsEditDataComponent', () => {
  let component: AdminPaymentsEditDataComponent;
  let fixture: ComponentFixture<AdminPaymentsEditDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminPaymentsEditDataComponent]
    });
    fixture = TestBed.createComponent(AdminPaymentsEditDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
