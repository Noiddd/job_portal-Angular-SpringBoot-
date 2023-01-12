import { Component } from '@angular/core';
import { JobseekerResumeService } from 'src/app/service/jobseeker-resume.service';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-jobseeker-addemploymenthistory-success',
  templateUrl: './jobseeker-addemploymenthistory-success.component.html',
  styleUrls: ['./jobseeker-addemploymenthistory-success.component.css'],
})
export class JobseekerAddemploymenthistorySuccessComponent {
  constructor(public jobSeekerResumeService: JobseekerResumeService) {}

  faXmark = faXmark;

  public onAnotherEmploymentHistory() {
    this.jobSeekerResumeService.showJobSeekerAddEmploymentHistorySuccess =
      false;
    this.jobSeekerResumeService.showJobSeekerAddEmploymentHistory = true;
  }
}
