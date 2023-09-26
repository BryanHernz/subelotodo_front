import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowToSaleComponent } from './how-to-sale.component';

describe('HowToSaleComponent', () => {
  let component: HowToSaleComponent;
  let fixture: ComponentFixture<HowToSaleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HowToSaleComponent]
    });
    fixture = TestBed.createComponent(HowToSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
