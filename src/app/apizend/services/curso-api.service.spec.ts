import { TestBed } from '@angular/core/testing';

import { CursoApiService } from './curso-api.service';

describe('CursoApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CursoApiService = TestBed.get(CursoApiService);
    expect(service).toBeTruthy();
  });
});
