import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { JobSeeker } from '../jobSeeker';
import { JobseekerService } from '../service/jobseeker.service';

@Component({
  selector: 'app-jobseeker-register',
  templateUrl: './jobseeker-register.component.html',
  styleUrls: ['./jobseeker-register.component.css'],
})
export class JobseekerRegisterComponent {
  constructor(
    public jobSeekerService: JobseekerService,
    private router: Router
  ) {}

  public onRegisterJobSeeker(registerForm: NgForm): void {
    if (
      this.validateFirstName() &&
      this.validateLastName() &&
      this.validateEmail() &&
      this.validatePhone() &&
      this.validatePassword() &&
      this.uniqueEmailTest()
    ) {
      console.log('in register');
      this.jobSeekerService.registerJobSeeker(registerForm.value).subscribe(
        (response: JobSeeker) => {
          console.log(response);
          this.router.navigate(['jobseeker/register/success']);
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
    }
  }

  public uniqueEmail(): any {
    console.log(this.email);

    this.jobSeekerService.checkUniqueEmail(this.email).subscribe(
      (response: JobSeeker[]) => {
        this.uniqueEmailReturn = response;
      },
      (error: HttpErrorResponse) => {
        this.uniqueEmailText = false;
        alert(error.message);
      }
    );
  }

  public uniqueEmailTest(): boolean {
    if (this.uniqueEmailReturn?.length == 0) {
      this.uniqueEmailText = false;
      return true;
    } else {
      this.uniqueEmailText = true;
      return false;
    }
  }

  //validation
  public uniqueEmailReturn?: JobSeeker[];

  public firstName: string = '';
  public firstNameError: boolean = false;

  public lastName: string = '';
  public lastNameError: boolean = false;

  public email: string = '';
  public emailError: boolean = false;

  public phone: string = '';
  public phoneError: boolean = false;

  public password: string = '';
  public passwordError: boolean = false;

  public formValid: boolean = false;

  public uniqueEmailText: boolean = false;

  validateFirstName(): boolean {
    if (/\d/.test(this.firstName)) {
      this.firstNameError = true;
      return false;
    } else {
      console.log('fname good');

      this.firstNameError = false;
      return true;
    }
  }

  validateLastName(): boolean {
    if (/\d/.test(this.lastName)) {
      this.lastNameError = true;
      return false;
    } else {
      console.log('lname good');

      this.lastNameError = false;
      return true;
    }
  }

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
      this.uniqueEmail();
      console.log('email good');
      this.emailError = false;
      return true;
    }
  }

  validatePhone(): any {
    if (!/\d/.test(this.phone) && this.phone != '') {
      this.phoneError = true;
      return false;
    } else {
      console.log(' phone good');

      this.phoneError = false;
      return true;
    }
  }

  validatePassword(): any {
    if (this.password.length < 7 && this.password != '') {
      this.passwordError = true;
      return false;
    } else {
      console.log(' password good');

      this.passwordError = false;
      return true;
    }
  }
}
