import { Component } from '@angular/core';
import { JobSeekerDataService } from './service/jobseeker-data.service';
import { JobseekerService } from './service/jobseeker.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [JobSeekerDataService, JobseekerService],
})
export class AppComponent {
  constructor(public jobSeekerData: JobSeekerDataService) {}
}
