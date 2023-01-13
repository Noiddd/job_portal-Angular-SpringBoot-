import { Component, Input } from '@angular/core';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { EmploymentHistory } from 'src/app/employmentHistory';

@Component({
  selector: 'app-jobseeker-employmenthistory',
  templateUrl: './jobseeker-employmenthistory.component.html',
  styleUrls: ['./jobseeker-employmenthistory.component.css'],
})
export class JobseekerEmploymenthistoryComponent {
  @Input() employmentHistory!: EmploymentHistory;

  faPen = faPen;

  public editEmploymentHistory() {}
}
