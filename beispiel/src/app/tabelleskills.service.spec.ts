import { TestBed } from '@angular/core/testing';

import { TabelleskillsService } from './tabelleskills.service';

describe('TabelleskillsService', () => {
  let service: TabelleskillsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TabelleskillsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
