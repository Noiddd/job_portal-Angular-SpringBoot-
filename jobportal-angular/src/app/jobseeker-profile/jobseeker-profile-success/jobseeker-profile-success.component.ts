import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jobseeker-profile-success',
  templateUrl: './jobseeker-profile-success.component.html',
  styleUrls: ['./jobseeker-profile-success.component.css'],
})
export class JobseekerProfileSuccessComponent {
  constructor(private router: Router) {}

  public routeJobSeekerHome() {
    this.router.navigate(['jobseeker/home']);
  }
}
