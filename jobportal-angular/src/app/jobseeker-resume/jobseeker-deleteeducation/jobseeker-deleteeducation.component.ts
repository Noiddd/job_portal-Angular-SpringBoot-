import { Component } from '@angular/core';
import { JobseekerResumeService } from 'src/app/service/jobseeker-resume.service';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { JobseekerService } from 'src/app/service/jobseeker.service';
import { Education } from 'src/app/education';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-jobseeker-deleteeducation',
  templateUrl: './jobseeker-deleteeducation.component.html',
  styleUrls: ['./jobseeker-deleteeducation.component.css'],
})
export class JobseekerDeleteeducationComponent {
  constructor(
    public jobSeekerResumeService: JobseekerResumeService,
    public jobSeekerService: JobseekerService
  ) {}

  faXmark = faXmark;
  public deleteEducation() {
    this.jobSeekerService
      .deleteEducation(this.jobSeekerResumeService.deleteEducation!)
      .subscribe(
        (response: Education) => {
          this.jobSeekerResumeService.showJobSeekerDeleteEducation = false;
          this.jobSeekerResumeService.showJobSeekerDeleteEducationSuccess =
            true;
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
  }
}
