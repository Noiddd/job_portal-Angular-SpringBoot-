import { Component } from '@angular/core';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { JobseekerResumeService } from 'src/app/service/jobseeker-resume.service';

@Component({
  selector: 'app-jobseeker-editemploymenthistory-success',
  templateUrl: './jobseeker-editemploymenthistory-success.component.html',
  styleUrls: ['./jobseeker-editemploymenthistory-success.component.css'],
})
export class JobseekerEditemploymenthistorySuccessComponent {
  constructor(public jobSeekerResumeService: JobseekerResumeService) {}

  faXmark = faXmark;
}
