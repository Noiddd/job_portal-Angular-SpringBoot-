import { Component } from '@angular/core';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { JobseekerResumeService } from 'src/app/service/jobseeker-resume.service';

@Component({
  selector: 'app-jobseeker-deleteeducation-success',
  templateUrl: './jobseeker-deleteeducation-success.component.html',
  styleUrls: ['./jobseeker-deleteeducation-success.component.css'],
})
export class JobseekerDeleteeducationSuccessComponent {
  constructor(public jobSeekerResumeService: JobseekerResumeService) {}

  faXmark = faXmark;
}
