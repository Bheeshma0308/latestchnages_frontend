import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KpisListComponent } from './kpis-list.component';

describe('KpisListComponent', () => {
  let component: KpisListComponent;
  let fixture: ComponentFixture<KpisListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KpisListComponent]
    });
    fixture = TestBed.createComponent(KpisListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
