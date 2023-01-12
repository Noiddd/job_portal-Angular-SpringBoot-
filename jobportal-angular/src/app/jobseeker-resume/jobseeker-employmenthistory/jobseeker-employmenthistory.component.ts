import { Component, Input } from '@angular/core';
import { EmploymentHistory } from 'src/app/employmentHistory';

@Component({
  selector: 'app-jobseeker-employmenthistory',
  templateUrl: './jobseeker-employmenthistory.component.html',
  styleUrls: ['./jobseeker-employmenthistory.component.css'],
})
export class JobseekerEmploymenthistoryComponent {
  @Input() employmentHistory!: EmploymentHistory;
}
