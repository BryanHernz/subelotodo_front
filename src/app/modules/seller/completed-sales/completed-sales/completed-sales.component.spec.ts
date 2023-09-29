import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedSalesComponent } from './completed-sales.component';

describe('CompletedSalesComponent', () => {
  let component: CompletedSalesComponent;
  let fixture: ComponentFixture<CompletedSalesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompletedSalesComponent]
    });
    fixture = TestBed.createComponent(CompletedSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
