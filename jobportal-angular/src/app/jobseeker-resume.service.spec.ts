import { TestBed } from '@angular/core/testing';

import { JobseekerResumeService } from './service/jobseeker-resume.service';

describe('JobseekerResumeService', () => {
  let service: JobseekerResumeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobseekerResumeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
