import { TestBed } from '@angular/core/testing';

import { PensamentosService } from './pensamento.service';

describe('PensamentoService', () => {
  let service: PensamentosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PensamentosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
