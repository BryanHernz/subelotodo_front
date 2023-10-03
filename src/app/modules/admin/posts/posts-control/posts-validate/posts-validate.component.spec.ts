import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsValidateComponent } from './posts-validate.component';

describe('PostsValidateComponent', () => {
  let component: PostsValidateComponent;
  let fixture: ComponentFixture<PostsValidateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostsValidateComponent]
    });
    fixture = TestBed.createComponent(PostsValidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
