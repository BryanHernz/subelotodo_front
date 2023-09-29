import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerDataComponent } from './seller-data.component';

describe('SellerDataComponent', () => {
  let component: SellerDataComponent;
  let fixture: ComponentFixture<SellerDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SellerDataComponent]
    });
    fixture = TestBed.createComponent(SellerDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
