import { TestBed } from '@angular/core/testing';

import { InfogetidService } from './infogetid.service';

describe('InfogetidService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InfogetidService = TestBed.get(InfogetidService);
    expect(service).toBeTruthy();
  });
});
