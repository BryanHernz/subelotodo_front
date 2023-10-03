import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFrequentQuestionsComponent } from './edit-frequent-questions.component';

describe('EditFrequentQuestionsComponent', () => {
  let component: EditFrequentQuestionsComponent;
  let fixture: ComponentFixture<EditFrequentQuestionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditFrequentQuestionsComponent]
    });
    fixture = TestBed.createComponent(EditFrequentQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
