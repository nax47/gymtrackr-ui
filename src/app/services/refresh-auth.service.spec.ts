import { TestBed } from '@angular/core/testing';

import { RefreshAuthService } from './refresh-auth.service';

describe('RefreshAuthService', () => {
  let service: RefreshAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RefreshAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
