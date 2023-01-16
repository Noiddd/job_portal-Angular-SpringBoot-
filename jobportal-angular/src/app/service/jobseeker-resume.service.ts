import { Injectable } from '@angular/core';
import { Education } from '../education';
import { EmploymentHistory } from '../employmentHistory';

@Injectable({
  providedIn: 'root',
})
export class JobseekerResumeService {
  constructor() {}

  showJobSeekerAddEducation: boolean = false;
  showJobSeekerAddEmploymentHistory: boolean = false;

  showJobSeekerEditEducation: boolean = false;
  showJobSeekerEditEmploymentHistory: boolean = false;

  showJobSeekerAddEducationSuccess: boolean = false;
  showJobSeekerAddEmploymentHistorySuccess: boolean = false;

  showJobSeekerEditEducationSuccess: boolean = false;
  showJobSeekerEditEmploymentHistorySuccess: boolean = false;

  public editEducation?: Education;
  public editEmploymentHistory?: EmploymentHistory;
}
