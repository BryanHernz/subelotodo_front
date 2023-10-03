import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNotificationsSeeMoreComponent } from './admin-notifications-see-more.component';

describe('AdminNotificationsSeeMoreComponent', () => {
  let component: AdminNotificationsSeeMoreComponent;
  let fixture: ComponentFixture<AdminNotificationsSeeMoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminNotificationsSeeMoreComponent]
    });
    fixture = TestBed.createComponent(AdminNotificationsSeeMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
