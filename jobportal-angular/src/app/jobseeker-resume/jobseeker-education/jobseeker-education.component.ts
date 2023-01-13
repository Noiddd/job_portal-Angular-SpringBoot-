import { Component, Input } from '@angular/core';
import { Education } from 'src/app/education';
import { faPen } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-jobseeker-education',
  templateUrl: './jobseeker-education.component.html',
  styleUrls: ['./jobseeker-education.component.css'],
})
export class JobseekerEducationComponent {
  @Input() education!: Education;

  faPen = faPen;

  public editEducation() {}
}
