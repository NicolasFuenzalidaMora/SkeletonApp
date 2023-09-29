import { TestBed } from '@angular/core/testing';

import { FirstGuardGuardGuard } from './first-guard-guard.guard';

describe('FirstGuardGuardGuard', () => {
  let guard: FirstGuardGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(FirstGuardGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
