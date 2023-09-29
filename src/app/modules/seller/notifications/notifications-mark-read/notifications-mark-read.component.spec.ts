import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationsMarkReadComponent } from './notifications-mark-read.component';

describe('NotificationsMarkReadComponent', () => {
  let component: NotificationsMarkReadComponent;
  let fixture: ComponentFixture<NotificationsMarkReadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotificationsMarkReadComponent]
    });
    fixture = TestBed.createComponent(NotificationsMarkReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
