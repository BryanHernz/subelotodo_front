import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerVerticalMenuComponent } from './seller-vertical-menu.component';

describe('SellerVerticalMenuComponent', () => {
  let component: SellerVerticalMenuComponent;
  let fixture: ComponentFixture<SellerVerticalMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SellerVerticalMenuComponent]
    });
    fixture = TestBed.createComponent(SellerVerticalMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
