import { Component } from '@angular/core';
import { Education } from '../education';
import { EmploymentHistory } from '../employmentHistory';
import { JobSeekerDataService } from '../service/jobseeker-data.service';

@Component({
  selector: 'app-jobseeker-resume',
  templateUrl: './jobseeker-resume.component.html',
  styleUrls: ['./jobseeker-resume.component.css'],
})
export class JobseekerResumeComponent {
  constructor(jobSeekerData: JobSeekerDataService) {
    this.employmentHistoryList =
      jobSeekerData.currentJobSeeker?.employmentHistoryList;

    this.educationList = jobSeekerData.currentJobSeeker?.educationList;
  }

  public employmentHistoryList?: EmploymentHistory[] = [];
  public educationList?: Education[] = [];
}
