import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedSalesSeeMoreComponent } from './completed-sales-see-more.component';

describe('CompletedSalesSeeMoreComponent', () => {
  let component: CompletedSalesSeeMoreComponent;
  let fixture: ComponentFixture<CompletedSalesSeeMoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompletedSalesSeeMoreComponent]
    });
    fixture = TestBed.createComponent(CompletedSalesSeeMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
