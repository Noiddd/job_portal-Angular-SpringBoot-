import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { JobseekerResumeService } from 'src/app/service/jobseeker-resume.service';

@Component({
  selector: 'app-jobseeker-addeducation-success',
  templateUrl: './jobseeker-addeducation-success.component.html',
  styleUrls: ['./jobseeker-addeducation-success.component.css'],
})
export class JobseekerAddeducationSuccessComponent {
  constructor(
    public jobSeekerResumeService: JobseekerResumeService,
    private router: Router
  ) {}

  faXmark = faXmark;

  public onAnotherEducation() {
    this.jobSeekerResumeService.showJobSeekerAddEducationSuccess = false;
    this.jobSeekerResumeService.showJobSeekerAddEducation = true;
  }
}
