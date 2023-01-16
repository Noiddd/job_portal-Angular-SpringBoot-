import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { EmploymentHistory } from 'src/app/employmentHistory';
import { JobseekerResumeService } from 'src/app/service/jobseeker-resume.service';
import { JobseekerService } from 'src/app/service/jobseeker.service';

@Component({
  selector: 'app-jobseeker-editemploymenthistory',
  templateUrl: './jobseeker-editemploymenthistory.component.html',
  styleUrls: ['./jobseeker-editemploymenthistory.component.css'],
})
export class JobseekerEditemploymenthistoryComponent {
  constructor(
    public jobSeekerResumeService: JobseekerResumeService,
    public jobSeekerService: JobseekerService
  ) {}

  faXmark = faXmark;

  public onEditEmploymentHistoryForm(editEmploymentHistoryForm: NgForm) {
    if (this.validateStartDate() && this.validateEndDate()) {
      this.jobSeekerService
        .editEmploymentHistory(editEmploymentHistoryForm.value)
        .subscribe(
          (response: EmploymentHistory) => {
            this.jobSeekerResumeService.showJobSeekerEditEmploymentHistory =
              false;
            this.jobSeekerResumeService.showJobSeekerEditEmploymentHistorySuccess =
              true;
          },
          (error: HttpErrorResponse) => {
            alert(error.message);
          }
        );
    }
  }

  public test() {
    this.jobSeekerResumeService.showJobSeekerEditEmploymentHistory = false;
  }

  public jobTitle: string = '';

  public company: string = '';

  public jobDescription: string = '';

  public startDate: string = '';
  public startDateError: boolean = false;

  public endDate: string = '';
  public endDateError: boolean = false;

  public validateStartDate(): boolean {
    return true;
  }
  public validateEndDate(): boolean {
    return true;
  }
}
