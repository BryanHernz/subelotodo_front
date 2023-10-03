import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAdminDataComponent } from './edit-admin-data.component';

describe('EditAdminDataComponent', () => {
  let component: EditAdminDataComponent;
  let fixture: ComponentFixture<EditAdminDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditAdminDataComponent]
    });
    fixture = TestBed.createComponent(EditAdminDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
