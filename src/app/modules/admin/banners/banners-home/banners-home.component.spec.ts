import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannersHomeComponent } from './banners-home.component';

describe('BannersHomeComponent', () => {
  let component: BannersHomeComponent;
  let fixture: ComponentFixture<BannersHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BannersHomeComponent]
    });
    fixture = TestBed.createComponent(BannersHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
