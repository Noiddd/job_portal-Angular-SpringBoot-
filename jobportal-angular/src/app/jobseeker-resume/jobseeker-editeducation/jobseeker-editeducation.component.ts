import { Component } from '@angular/core';
import { JobseekerResumeService } from 'src/app/service/jobseeker-resume.service';
import { JobseekerService } from 'src/app/service/jobseeker.service';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { NgForm } from '@angular/forms';
import { Education } from 'src/app/education';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-jobseeker-editeducation',
  templateUrl: './jobseeker-editeducation.component.html',
  styleUrls: ['./jobseeker-editeducation.component.css'],
})
export class JobseekerEditeducationComponent {
  constructor(
    public jobSeekerResumeService: JobseekerResumeService,
    public jobSeekerService: JobseekerService
  ) {}

  faXmark = faXmark;

  public onEditEducation(editEducationForm: NgForm) {
    if (this.validateStartDate() && this.validateEndDate()) {
      this.jobSeekerService.editEducation(editEducationForm.value).subscribe(
        (response: Education) => {
          this.jobSeekerResumeService.showJobSeekerEditEducation = false;
          this.jobSeekerResumeService.showJobSeekerEditEducationSuccess = true;
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
    }
  }

  public test() {
    this.jobSeekerResumeService.showJobSeekerEditEducation = false;
  }

  public institute: string = '';

  public qualification: string = '';

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
