import { Component, Input } from '@angular/core';
import { Education } from 'src/app/education';
import { faPen, faXmark } from '@fortawesome/free-solid-svg-icons';
import { JobseekerResumeService } from 'src/app/service/jobseeker-resume.service';

@Component({
  selector: 'app-jobseeker-education',
  templateUrl: './jobseeker-education.component.html',
  styleUrls: ['./jobseeker-education.component.css'],
})
export class JobseekerEducationComponent {
  constructor(public jobSeekerResumeService: JobseekerResumeService) {}

  @Input() education!: Education;

  faPen = faPen;
  faXmark = faXmark;

  public editEducation() {
    this.jobSeekerResumeService.showJobSeekerEditEducation = true;
    this.jobSeekerResumeService.editEducation = this.education;
  }

  public deleteEducation() {
    this.jobSeekerResumeService.showJobSeekerDeleteEducation = true;
    this.jobSeekerResumeService.deleteEducation = this.education;
  }
}
