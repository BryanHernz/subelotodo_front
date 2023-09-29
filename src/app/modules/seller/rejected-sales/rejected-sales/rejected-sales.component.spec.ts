import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectedSalesComponent } from './rejected-sales.component';

describe('RejectedSalesComponent', () => {
  let component: RejectedSalesComponent;
  let fixture: ComponentFixture<RejectedSalesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RejectedSalesComponent]
    });
    fixture = TestBed.createComponent(RejectedSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
