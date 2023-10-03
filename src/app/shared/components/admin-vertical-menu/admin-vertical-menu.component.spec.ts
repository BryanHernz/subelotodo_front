import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminVerticalMenuComponent } from './admin-vertical-menu.component';

describe('AdminVerticalMenuComponent', () => {
  let component: AdminVerticalMenuComponent;
  let fixture: ComponentFixture<AdminVerticalMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminVerticalMenuComponent]
    });
    fixture = TestBed.createComponent(AdminVerticalMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
