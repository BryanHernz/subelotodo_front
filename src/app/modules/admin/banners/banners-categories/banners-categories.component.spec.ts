import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannersCategoriesComponent } from './banners-categories.component';

describe('BannersCategoriesComponent', () => {
  let component: BannersCategoriesComponent;
  let fixture: ComponentFixture<BannersCategoriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BannersCategoriesComponent]
    });
    fixture = TestBed.createComponent(BannersCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
