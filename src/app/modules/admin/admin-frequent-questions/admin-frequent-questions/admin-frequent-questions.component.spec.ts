import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFrequentQuestionsComponent } from './admin-frequent-questions.component';

describe('AdminFrequentQuestionsComponent', () => {
  let component: AdminFrequentQuestionsComponent;
  let fixture: ComponentFixture<AdminFrequentQuestionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminFrequentQuestionsComponent]
    });
    fixture = TestBed.createComponent(AdminFrequentQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
