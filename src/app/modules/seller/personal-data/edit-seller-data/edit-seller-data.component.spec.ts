import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSellerDataComponent } from './edit-seller-data.component';

describe('EditSellerDataComponent', () => {
  let component: EditSellerDataComponent;
  let fixture: ComponentFixture<EditSellerDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditSellerDataComponent]
    });
    fixture = TestBed.createComponent(EditSellerDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
