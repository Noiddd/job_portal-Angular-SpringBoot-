import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { EmploymentHistory } from 'src/app/employmentHistory';
import { JobseekerResumeService } from 'src/app/service/jobseeker-resume.service';
import { JobseekerService } from 'src/app/service/jobseeker.service';

@Component({
  selector: 'app-jobseeker-deleteemploymenthistory',
  templateUrl: './jobseeker-deleteemploymenthistory.component.html',
  styleUrls: ['./jobseeker-deleteemploymenthistory.component.css'],
})
export class JobseekerDeleteemploymenthistoryComponent {
  constructor(
    public jobSeekerResumeService: JobseekerResumeService,
    public jobSeekerService: JobseekerService
  ) {}

  faXmark = faXmark;
  public deleteEmploymentHistory() {
    this.jobSeekerService
      .deleteEmploymentHistory(
        this.jobSeekerResumeService.deleteEmploymentHistory!
      )
      .subscribe(
        (response: EmploymentHistory) => {
          this.jobSeekerResumeService.showJobSeekerDeleteEmploymentHistory =
            false;
          this.jobSeekerResumeService.showJobSeekerDeleteEmploymentHistorySuccess =
            true;
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
  }
}
