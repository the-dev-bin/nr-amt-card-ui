import { TestBed } from '@angular/core/testing';

import { AmtcardAPIService } from './amtcard-api.service';

describe('AmtcardAPIService', () => {
  let service: AmtcardAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AmtcardAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
