import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesRegisterSeeMoreComponent } from './sales-register-see-more.component';

describe('SalesRegisterSeeMoreComponent', () => {
  let component: SalesRegisterSeeMoreComponent;
  let fixture: ComponentFixture<SalesRegisterSeeMoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SalesRegisterSeeMoreComponent]
    });
    fixture = TestBed.createComponent(SalesRegisterSeeMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
