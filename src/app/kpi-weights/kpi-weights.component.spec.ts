import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KpiWeightsComponent } from './kpi-weights.component';

describe('KpiWeightsComponent', () => {
  let component: KpiWeightsComponent;
  let fixture: ComponentFixture<KpiWeightsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KpiWeightsComponent]
    });
    fixture = TestBed.createComponent(KpiWeightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
