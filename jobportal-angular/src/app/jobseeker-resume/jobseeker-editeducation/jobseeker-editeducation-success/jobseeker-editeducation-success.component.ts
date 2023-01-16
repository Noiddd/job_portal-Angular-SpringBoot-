import { Component } from '@angular/core';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { JobseekerResumeService } from 'src/app/service/jobseeker-resume.service';

@Component({
  selector: 'app-jobseeker-editeducation-success',
  templateUrl: './jobseeker-editeducation-success.component.html',
  styleUrls: ['./jobseeker-editeducation-success.component.css'],
})
export class JobseekerEditeducationSuccessComponent {
  constructor(public jobSeekerResumeService: JobseekerResumeService) {}

  faXmark = faXmark;
}
