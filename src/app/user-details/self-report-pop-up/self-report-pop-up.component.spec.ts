import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfReportPopUpComponent } from './self-report-pop-up.component';

describe('SelfReportPopUpComponent', () => {
  let component: SelfReportPopUpComponent;
  let fixture: ComponentFixture<SelfReportPopUpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelfReportPopUpComponent]
    });
    fixture = TestBed.createComponent(SelfReportPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
