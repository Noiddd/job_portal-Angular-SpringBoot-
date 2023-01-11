import { Component } from '@angular/core';
import { JobSeekerDataService } from '../service/jobseeker-data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(public jobSeekerData: JobSeekerDataService) {}
}
