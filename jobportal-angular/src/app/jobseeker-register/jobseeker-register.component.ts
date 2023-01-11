import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-jobseeker-register',
  templateUrl: './jobseeker-register.component.html',
  styleUrls: ['./jobseeker-register.component.css'],
})
export class JobseekerRegisterComponent {
  public onRegisterJobSeeker(addForm: NgForm): void {
    if (
      this.validateFirstName() &&
      this.validateLastName() &&
      this.validateEmail() &&
      this.validatePhone() &&
      this.validatePassword()
    ) {
    }
  }

  //validation
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

  validateFirstName(): boolean {
    if (/\d/.test(this.firstName)) {
      this.firstNameError = true;
      return false;
    } else {
      this.firstNameError = false;
      return true;
    }
  }

  validateLastName(): boolean {
    if (/\d/.test(this.lastName)) {
      this.lastNameError = true;
      return false;
    } else {
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
      this.emailError = false;
      return true;
    }
  }

  validatePhone(): any {
    if (!/\d/.test(this.phone) && this.phone != '') {
      this.phoneError = true;
      return false;
    } else {
      this.phoneError = false;
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
