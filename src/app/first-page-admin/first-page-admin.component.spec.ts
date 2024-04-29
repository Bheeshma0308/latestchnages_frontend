import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstPageAdminComponent } from './first-page-admin.component';

describe('FirstPageAdminComponent', () => {
  let component: FirstPageAdminComponent;
  let fixture: ComponentFixture<FirstPageAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FirstPageAdminComponent]
    });
    fixture = TestBed.createComponent(FirstPageAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
