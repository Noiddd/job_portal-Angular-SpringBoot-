import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { JobSeeker } from '../jobSeeker';
import { JobSeekerDataService } from '../service/jobseeker-data.service';
import { JobseekerService } from '../service/jobseeker.service';

@Component({
  selector: 'app-jobseeker-login',
  templateUrl: './jobseeker-login.component.html',
  styleUrls: ['./jobseeker-login.component.css'],
})
export class JobseekerLoginComponent {
  constructor(
    private jobSeekerService: JobseekerService,
    private router: Router,
    public jobSeekerData: JobSeekerDataService
  ) {}

  public onLoginJobSeeker(loginForm: NgForm): void {
    if (this.validateEmail() && this.validatePassword()) {
      this.jobSeekerService
        .loginJobSeeker(loginForm.value.email, loginForm.value.password)
        .subscribe(
          (response: JobSeeker[]) => {
            if (response.length == 0) {
              // if response is empty, incorrect email or password
              this.incorrectInputs = true;
            } else {
              console.log(response[0]);
              this.jobSeekerData.currentJobSeeker = response[0];
              this.jobSeekerData.loggedIn = true;
              this.router.navigate(['jobseeker/home']);
            }
          },
          (error: HttpErrorResponse) => {
            alert(error.message);
          }
        );
    }
  }

  public incorrectInputs: boolean = false;

  public email: string = '';
  public emailError: boolean = false;

  public password: string = '';
  public passwordError: boolean = false;

  validateEmail(): any {
    if (this.email == '') {
      this.emailError = false;
    } else if (
      !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        this.email.toLowerCase()
      )
    ) {
      this.emailError = true;
      return false;
    } else {
      this.emailError = false;
      return true;
    }
  }

  validatePassword(): any {
    if (this.password.length < 7 && this.password != '') {
      this.passwordError = true;
      return false;
    } else {
      this.passwordError = false;
      return true;
    }
  }
}
