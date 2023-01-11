import { TestBed } from '@angular/core/testing';

import { JobSeekerDataService } from './service/jobseeker-data.service';

describe('JobseekerDataService', () => {
  let service: JobSeekerDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobSeekerDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
