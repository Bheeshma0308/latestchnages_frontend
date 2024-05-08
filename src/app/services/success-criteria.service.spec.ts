import { TestBed } from '@angular/core/testing';

import { SuccessCriteriaService } from './success-criteria.service';

describe('SuccessCriteriaService', () => {
  let service: SuccessCriteriaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuccessCriteriaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
