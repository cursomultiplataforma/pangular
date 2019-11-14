import { TestBed } from '@angular/core/testing';

import { ApicloudService } from './apicloud.service';

describe('ApicloudService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApicloudService = TestBed.get(ApicloudService);
    expect(service).toBeTruthy();
  });
});
