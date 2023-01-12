import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { EmploymentHistory } from 'src/app/employmentHistory';
import { JobSeekerDataService } from 'src/app/service/jobseeker-data.service';
import { JobseekerResumeService } from 'src/app/service/jobseeker-resume.service';
import { JobseekerService } from 'src/app/service/jobseeker.service';

@Component({
  selector: 'app-jobseeker-addemploymenthistory',
  templateUrl: './jobseeker-addemploymenthistory.component.html',
  styleUrls: ['./jobseeker-addemploymenthistory.component.css'],
})
export class JobseekerAddemploymenthistoryComponent {
  constructor(
    public jobSeekerResumeService: JobseekerResumeService,
    public jobSeekerService: JobseekerService,
    public jobSeekerDataService: JobSeekerDataService
  ) {
    this.jobSeekerId = this.jobSeekerDataService.currentJobSeeker!.id;
  }

  public onAddEmploymentHistory(addEmploymentHistoryForm: NgForm) {
    if (this.validateStartDate() && this.validateEndDate()) {
      this.jobSeekerService
        .addEmploymentHistory(addEmploymentHistoryForm.value, this.jobSeekerId!)
        .subscribe(
          (response: EmploymentHistory) => {
            this.jobSeekerResumeService.showJobSeekerAddEmploymentHistory =
              false;
            this.jobSeekerResumeService.showJobSeekerAddEmploymentHistorySuccess =
              true;
          },
          (error: HttpErrorResponse) => {
            alert(error.message);
          }
        );
    }
  }

  faXmark = faXmark;

  public jobSeekerId!: number;

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
