import { Component, Input } from '@angular/core';
import { faPen, faXmark } from '@fortawesome/free-solid-svg-icons';
import { EmploymentHistory } from 'src/app/employmentHistory';
import { JobseekerResumeService } from 'src/app/service/jobseeker-resume.service';

@Component({
  selector: 'app-jobseeker-employmenthistory',
  templateUrl: './jobseeker-employmenthistory.component.html',
  styleUrls: ['./jobseeker-employmenthistory.component.css'],
})
export class JobseekerEmploymenthistoryComponent {
  constructor(public jobSeekerResumeService: JobseekerResumeService) {}

  @Input() employmentHistory!: EmploymentHistory;

  faPen = faPen;
  faXmark = faXmark;

  public editEmploymentHistory() {
    this.jobSeekerResumeService.showJobSeekerEditEmploymentHistory = true;
    this.jobSeekerResumeService.editEmploymentHistory = this.employmentHistory;
  }
  public deleteEmploymentHistory() {
    this.jobSeekerResumeService.showJobSeekerDeleteEmploymentHistory = true;
    this.jobSeekerResumeService.deleteEmploymentHistory =
      this.employmentHistory;
  }
}
