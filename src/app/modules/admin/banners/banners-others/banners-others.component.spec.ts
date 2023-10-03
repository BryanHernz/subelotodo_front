import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannersOthersComponent } from './banners-others.component';

describe('BannersOthersComponent', () => {
  let component: BannersOthersComponent;
  let fixture: ComponentFixture<BannersOthersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BannersOthersComponent]
    });
    fixture = TestBed.createComponent(BannersOthersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
