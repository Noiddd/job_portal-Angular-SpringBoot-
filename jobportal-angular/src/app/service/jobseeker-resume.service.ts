import { Injectable } from '@angular/core';
import { Education } from '../education';
import { EmploymentHistory } from '../employmentHistory';
import { Skills } from '../skills';

@Injectable({
  providedIn: 'root',
})
export class JobseekerResumeService {
  constructor() {}

  showJobSeekerAddEducation: boolean = false;
  showJobSeekerAddEmploymentHistory: boolean = false;
  showJobSeekerAddSkills: boolean = false;

  showJobSeekerEditEducation: boolean = false;
  showJobSeekerEditEmploymentHistory: boolean = false;

  showJobSeekerDeleteEducation: boolean = false;
  showJobSeekerDeleteEmploymentHistory: boolean = false;
  showJobSeekerDeleteSkills: boolean = false;

  showJobSeekerAddEducationSuccess: boolean = false;
  showJobSeekerAddEmploymentHistorySuccess: boolean = false;
  showJobSeekerAddSkillsSuccess: boolean = false;

  showJobSeekerEditEducationSuccess: boolean = false;
  showJobSeekerEditEmploymentHistorySuccess: boolean = false;

  showJobSeekerDeleteEducationSuccess: boolean = false;
  showJobSeekerDeleteEmploymentHistorySuccess: boolean = false;
  showJobSeekerDeketeSkillsSuccess: boolean = false;

  public editEducation?: Education;
  public editEmploymentHistory?: EmploymentHistory;

  public deleteEducation?: Education;
  public deleteEmploymentHistory?: EmploymentHistory;
  public deleteSkills?: Skills;
}
