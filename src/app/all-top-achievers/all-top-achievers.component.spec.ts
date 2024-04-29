import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTopAchieversComponent } from './all-top-achievers.component';

describe('AllTopAchieversComponent', () => {
  let component: AllTopAchieversComponent;
  let fixture: ComponentFixture<AllTopAchieversComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllTopAchieversComponent]
    });
    fixture = TestBed.createComponent(AllTopAchieversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
