import { Component } from '@angular/core';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { JobseekerResumeService } from 'src/app/service/jobseeker-resume.service';

@Component({
  selector: 'app-jobseeker-deleteemploymenthistory-success',
  templateUrl: './jobseeker-deleteemploymenthistory-success.component.html',
  styleUrls: ['./jobseeker-deleteemploymenthistory-success.component.css'],
})
export class JobseekerDeleteemploymenthistorySuccessComponent {
  constructor(public jobSeekerResumeService: JobseekerResumeService) {}

  faXmark = faXmark;
}
