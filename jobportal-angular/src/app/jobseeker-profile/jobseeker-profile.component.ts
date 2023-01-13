import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { JobSeeker } from '../jobSeeker';
import { JobSeekerDataService } from '../service/jobseeker-data.service';
import { JobseekerService } from '../service/jobseeker.service';

@Component({
  selector: 'app-jobseeker-profile',
  templateUrl: './jobseeker-profile.component.html',
  styleUrls: ['./jobseeker-profile.component.css'],
})
export class JobseekerProfileComponent {
  constructor(
    public jobSeekerService: JobseekerService,
    private router: Router,
    public jobSeekerData: JobSeekerDataService
  ) {}

  public onEditJobSeeker(editForm: NgForm): void {
    if (
      this.validateFirstName(editForm.value.firstName) &&
      this.validateLastName(editForm.value.lastName) &&
      this.validateEmail(editForm.value.email) &&
      this.validatePhone(editForm.value.phone) &&
      this.validatePassword(editForm.value.password) &&
      this.uniqueEmail(editForm.value)
    ) {
      this.jobSeekerData.currentJobSeeker = editForm.value;

      this.jobSeekerService.editJobSeeker(editForm.value).subscribe(
        (response: JobSeeker) => {
          this.router.navigate(['jobseeker/profile/success']);
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
    }
  }

  public uniqueEmail(jobSeekerInput: JobSeeker): any {
    this.jobSeekerService.checkUniqueEmail(jobSeekerInput.email).subscribe(
      (response: JobSeeker[]) => {
        if (response.length == 0) {
          console.log('uniqueEmail pass');
          this.uniqueEmailText = false;
          return true;
        } else if (
          response[0].id == jobSeekerInput.id &&
          response[0].email == jobSeekerInput.email
        ) {
          this.uniqueEmailText = false;
          return true;
        } else {
          console.log('uniqueEmail fail');
          this.uniqueEmailText = true;
          return false;
        }
      },
      (error: HttpErrorResponse) => {
        console.log('uniqueEmail error fail');
        this.uniqueEmailText = false;
        return false;
        alert(error.message);
      }
    );
  }

  //validation
  public uniqueEmailReturn?: JobSeeker[];

  public firstNameError: boolean = false;

  public lastNameError: boolean = false;

  public emailError: boolean = false;

  public phoneError: boolean = false;

  public passwordError: boolean = false;

  public formValid: boolean = false;

  public uniqueEmailText: boolean = false;

  validateFirstName(firstNameInput: string): boolean {
    if (/\d/.test(firstNameInput)) {
      this.firstNameError = true;
      return false;
    } else {
      console.log('first name pass');
      this.firstNameError = false;
      return true;
    }
  }

  validateLastName(lastNameInput: string): boolean {
    if (/\d/.test(lastNameInput)) {
      this.lastNameError = true;
      return false;
    } else {
      console.log('last name pass');
      this.lastNameError = false;
      return true;
    }
  }

  validateEmail(emailInput: string): any {
    if (emailInput == '') {
      this.emailError = false;
    } else if (
      !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        emailInput.toLowerCase()
      )
    ) {
      this.emailError = true;
      return false;
    } else {
      console.log('email pass');

      this.emailError = false;
      return true;
    }
  }

  validatePhone(phoneInput: string): any {
    if (!/\d/.test(phoneInput) && phoneInput != '') {
      this.phoneError = true;
      return false;
    } else {
      console.log('phone pass');

      this.phoneError = false;
      return true;
    }
  }

  validatePassword(passwordInput: string): any {
    if (passwordInput.length < 7 && passwordInput != '') {
      this.passwordError = true;
      return false;
    } else {
      console.log('password pass');

      this.passwordError = false;
      return true;
    }
  }
}
