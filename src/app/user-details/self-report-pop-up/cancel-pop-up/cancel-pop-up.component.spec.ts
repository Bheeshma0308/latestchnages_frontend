import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelPopUpComponent } from './cancel-pop-up.component';

describe('CancelPopUpComponent', () => {
  let component: CancelPopUpComponent;
  let fixture: ComponentFixture<CancelPopUpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CancelPopUpComponent]
    });
    fixture = TestBed.createComponent(CancelPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
