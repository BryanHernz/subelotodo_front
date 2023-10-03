import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNotificationsMarkReadComponent } from './admin-notifications-mark-read.component';

describe('AdminNotificationsMarkReadComponent', () => {
  let component: AdminNotificationsMarkReadComponent;
  let fixture: ComponentFixture<AdminNotificationsMarkReadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminNotificationsMarkReadComponent]
    });
    fixture = TestBed.createComponent(AdminNotificationsMarkReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
