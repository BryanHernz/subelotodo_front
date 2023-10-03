import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsFormAddItemComponent } from './posts-form-add-item.component';

describe('PostsFormAddItemComponent', () => {
  let component: PostsFormAddItemComponent;
  let fixture: ComponentFixture<PostsFormAddItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostsFormAddItemComponent]
    });
    fixture = TestBed.createComponent(PostsFormAddItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
