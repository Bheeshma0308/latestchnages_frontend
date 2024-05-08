import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessCriteriaCoeComponent } from './success-criteria-coe.component';

describe('SuccessCriteriaCoeComponent', () => {
  let component: SuccessCriteriaCoeComponent;
  let fixture: ComponentFixture<SuccessCriteriaCoeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuccessCriteriaCoeComponent]
    });
    fixture = TestBed.createComponent(SuccessCriteriaCoeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
