import { TestBed } from '@angular/core/testing';

import { DeveloperService } from './developer_service.service';

describe('DeveloperService', () => {
  let service: DeveloperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeveloperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
