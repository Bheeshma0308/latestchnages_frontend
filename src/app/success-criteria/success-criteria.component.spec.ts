import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessCriteriaComponent } from './success-criteria.component';

describe('SuccessCriteriaComponent', () => {
  let component: SuccessCriteriaComponent;
  let fixture: ComponentFixture<SuccessCriteriaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuccessCriteriaComponent]
    });
    fixture = TestBed.createComponent(SuccessCriteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
