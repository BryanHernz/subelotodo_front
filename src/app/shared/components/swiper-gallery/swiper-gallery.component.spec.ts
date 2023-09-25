import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwiperGalleryComponent } from './swiper-gallery.component';

describe('SwiperGalleryComponent', () => {
  let component: SwiperGalleryComponent;
  let fixture: ComponentFixture<SwiperGalleryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SwiperGalleryComponent]
    });
    fixture = TestBed.createComponent(SwiperGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
