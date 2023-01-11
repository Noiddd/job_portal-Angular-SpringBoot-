import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jobseeker-register-success',
  templateUrl: './jobseeker-register-success.component.html',
  styleUrls: ['./jobseeker-register-success.component.css'],
})
export class JobseekerRegisterSuccessComponent {
  constructor(private router: Router) {}

  public routeJobSeekerLogin() {
    this.router.navigate(['jobseeker/login']);
  }
}
