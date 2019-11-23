import { TestBed } from '@angular/core/testing';

import { UsuarioDosService } from './usuario-dos.service';

describe('UsuarioDosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsuarioDosService = TestBed.get(UsuarioDosService);
    expect(service).toBeTruthy();
  });
});
