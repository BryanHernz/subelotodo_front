import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePostsComponent } from './delete-posts.component';

describe('DeletePostsComponent', () => {
  let component: DeletePostsComponent;
  let fixture: ComponentFixture<DeletePostsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeletePostsComponent]
    });
    fixture = TestBed.createComponent(DeletePostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
