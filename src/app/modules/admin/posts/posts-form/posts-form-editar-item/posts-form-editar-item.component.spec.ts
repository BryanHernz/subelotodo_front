import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsFormEditarItemComponent } from './posts-form-editar-item.component';

describe('PostsFormEditarItemComponent', () => {
  let component: PostsFormEditarItemComponent;
  let fixture: ComponentFixture<PostsFormEditarItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostsFormEditarItemComponent]
    });
    fixture = TestBed.createComponent(PostsFormEditarItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
