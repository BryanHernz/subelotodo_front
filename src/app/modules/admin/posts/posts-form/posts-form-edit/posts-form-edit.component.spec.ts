import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsFormEditComponent } from './posts-form-edit.component';

describe('PostsFormEditComponent', () => {
  let component: PostsFormEditComponent;
  let fixture: ComponentFixture<PostsFormEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostsFormEditComponent]
    });
    fixture = TestBed.createComponent(PostsFormEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
