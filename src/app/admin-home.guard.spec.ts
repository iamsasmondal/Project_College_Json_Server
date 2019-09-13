import { TestBed, async, inject } from '@angular/core/testing';

import { AdminHomeGuard } from './admin-home.guard';

describe('AdminHomeGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminHomeGuard]
    });
  });

  it('should ...', inject([AdminHomeGuard], (guard: AdminHomeGuard) => {
    expect(guard).toBeTruthy();
  }));
});
