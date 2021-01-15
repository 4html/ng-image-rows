import { TestBed } from '@angular/core/testing';

import { NgImageRowsService } from './ng-image-rows.service';

describe('NgImageRowsService', () => {
  let service: NgImageRowsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgImageRowsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
