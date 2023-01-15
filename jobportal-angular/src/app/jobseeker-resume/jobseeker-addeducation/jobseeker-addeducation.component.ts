import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { JobseekerResumeService } from 'src/app/service/jobseeker-resume.service';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { NgForm } from '@angular/forms';
import { JobseekerService } from 'src/app/service/jobseeker.service';
import { JobSeekerDataService } from 'src/app/service/jobseeker-data.service';
import { Education } from 'src/app/education';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-jobseeker-addeducation',
  templateUrl: './jobseeker-addeducation.component.html',
  styleUrls: ['./jobseeker-addeducation.component.css'],
})
export class JobseekerAddeducationComponent {
  constructor(
    public jobSeekerResumeService: JobseekerResumeService,
    public jobSeekerService: JobseekerService,
    public jobSeekerDataService: JobSeekerDataService
  ) {
    this.jobSeekerId = this.jobSeekerDataService.currentJobSeeker!.id;
  }
  faXmark = faXmark;

  public onAddEducation(addEducationForm: NgForm) {
    if (this.validateStartDate() && this.validateEndDate()) {
      this.jobSeekerService
        .addEducation(addEducationForm.value, this.jobSeekerId!)
        .subscribe(
          (response: Education) => {
            this.jobSeekerResumeService.showJobSeekerAddEducation = false;
            this.jobSeekerResumeService.showJobSeekerAddEducationSuccess = true;
          },
          (error: HttpErrorResponse) => {
            alert(error.message);
          }
        );
    }
  }

  public test() {
    this.jobSeekerResumeService.showJobSeekerAddEducation = false;
    window.location.reload();
  }

  public jobSeekerId!: number;

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
