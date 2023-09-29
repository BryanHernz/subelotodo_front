import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePostsSeeMoreComponent } from './delete-posts-see-more.component';

describe('DeletePostsSeeMoreComponent', () => {
  let component: DeletePostsSeeMoreComponent;
  let fixture: ComponentFixture<DeletePostsSeeMoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeletePostsSeeMoreComponent]
    });
    fixture = TestBed.createComponent(DeletePostsSeeMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
