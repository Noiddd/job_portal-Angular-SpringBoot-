import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class JobseekerResumeService {
  constructor() {}

  showJobSeekerAddEducation: boolean = false;
  showJobSeekerAddEmploymentHistory: boolean = false;

  showJobSeekerAddEducationSuccess: boolean = false;
  showJobSeekerAddEmploymentHistorySuccess: boolean = false;
}
