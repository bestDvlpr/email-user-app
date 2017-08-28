/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CountSendService } from './count-send.service';

describe('CountSendService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CountSendService]
    });
  });

  it('should ...', inject([CountSendService], (service: CountSendService) => {
    expect(service).toBeTruthy();
  }));
});
