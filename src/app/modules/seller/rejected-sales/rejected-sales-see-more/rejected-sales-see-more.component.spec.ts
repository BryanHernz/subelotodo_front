import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectedSalesSeeMoreComponent } from './rejected-sales-see-more.component';

describe('RejectedSalesSeeMoreComponent', () => {
  let component: RejectedSalesSeeMoreComponent;
  let fixture: ComponentFixture<RejectedSalesSeeMoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RejectedSalesSeeMoreComponent]
    });
    fixture = TestBed.createComponent(RejectedSalesSeeMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
