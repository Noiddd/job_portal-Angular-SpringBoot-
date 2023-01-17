import { Component } from '@angular/core';
import { Education } from '../education';
import { EmploymentHistory } from '../employmentHistory';
import { JobSeekerDataService } from '../service/jobseeker-data.service';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { JobseekerResumeService } from '../service/jobseeker-resume.service';

@Component({
  selector: 'app-jobseeker-resume',
  templateUrl: './jobseeker-resume.component.html',
  styleUrls: ['./jobseeker-resume.component.css'],
})
export class JobseekerResumeComponent {
  constructor(
    jobSeekerData: JobSeekerDataService,
    public jobSeekerResumeService: JobseekerResumeService
  ) {
    this.employmentHistoryList =
      jobSeekerData.currentJobSeeker?.employmentHistoryList;

    this.educationList = jobSeekerData.currentJobSeeker?.educationList;
  }

  public employmentHistoryList?: EmploymentHistory[] = [];
  public educationList?: Education[] = [];

  faPlus = faPlus;

  public addEmploymentHistory() {
    this.jobSeekerResumeService.showJobSeekerAddEmploymentHistory = true;
  }

  public addEducation() {
    this.jobSeekerResumeService.showJobSeekerAddEducation = true;
  }

  public addSkills() {}
}
