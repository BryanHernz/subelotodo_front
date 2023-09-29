import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationsSeeMoreComponent } from './notifications-see-more.component';

describe('NotificationsSeeMoreComponent', () => {
  let component: NotificationsSeeMoreComponent;
  let fixture: ComponentFixture<NotificationsSeeMoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotificationsSeeMoreComponent]
    });
    fixture = TestBed.createComponent(NotificationsSeeMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
