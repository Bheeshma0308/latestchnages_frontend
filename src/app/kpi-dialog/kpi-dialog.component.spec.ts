import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KpiDialogComponent } from './kpi-dialog.component';

describe('KpiDialogComponent', () => {
  let component: KpiDialogComponent;
  let fixture: ComponentFixture<KpiDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KpiDialogComponent]
    });
    fixture = TestBed.createComponent(KpiDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
