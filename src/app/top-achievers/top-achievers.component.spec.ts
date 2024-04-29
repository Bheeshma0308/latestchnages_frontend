import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopAchieversComponent } from './top-achievers.component';

describe('TopAchieversComponent', () => {
  let component: TopAchieversComponent;
  let fixture: ComponentFixture<TopAchieversComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopAchieversComponent]
    });
    fixture = TestBed.createComponent(TopAchieversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
