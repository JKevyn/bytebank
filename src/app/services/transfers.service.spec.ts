/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TransfersService } from './transfers.service';

describe('Service: Transfers', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TransfersService]
    });
  });

  it('should ...', inject([TransfersService], (service: TransfersService) => {
    expect(service).toBeTruthy();
  }));
});
