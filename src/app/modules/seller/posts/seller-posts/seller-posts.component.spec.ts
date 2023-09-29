import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerPostsComponent } from './seller-posts.component';

describe('SellerPostsComponent', () => {
  let component: SellerPostsComponent;
  let fixture: ComponentFixture<SellerPostsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SellerPostsComponent]
    });
    fixture = TestBed.createComponent(SellerPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
