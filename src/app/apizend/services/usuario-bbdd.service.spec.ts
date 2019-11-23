import { TestBed } from '@angular/core/testing';

import { UsuarioBbddService } from './usuario-bbdd.service';

describe('UsuarioBbddService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsuarioBbddService = TestBed.get(UsuarioBbddService);
    expect(service).toBeTruthy();
  });
});
