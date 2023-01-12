import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { JobseekerRegisterComponent } from './jobseeker-register/jobseeker-register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { JobseekerRegisterSuccessComponent } from './jobseeker-register/jobseeker-register-success/jobseeker-register-success.component';
import { JobseekerLoginComponent } from './jobseeker-login/jobseeker-login.component';
import { JobseekerHomeComponent } from './jobseeker-home/jobseeker-home.component';
import { JobseekerProfileComponent } from './jobseeker-profile/jobseeker-profile.component';
import { JobseekerProfileSuccessComponent } from './jobseeker-profile/jobseeker-profile-success/jobseeker-profile-success.component';
import { JobseekerEducationComponent } from './jobseeker-resume/jobseeker-education/jobseeker-education.component';
import { JobseekerResumeComponent } from './jobseeker-resume/jobseeker-resume.component';
import { JobseekerEmploymenthistoryComponent } from './jobseeker-resume/jobseeker-employmenthistory/jobseeker-employmenthistory.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'jobseeker/register', component: JobseekerRegisterComponent },
  { path: 'jobseeker/login', component: JobseekerLoginComponent },
  { path: 'jobseeker/home', component: JobseekerHomeComponent },
  { path: 'jobseeker/profile', component: JobseekerProfileComponent },
  { path: 'jobseeker/resume', component: JobseekerResumeComponent },
  {
    path: 'jobseeker/register/success',
    component: JobseekerRegisterSuccessComponent,
  },
  {
    path: 'jobseeker/profile/success',
    component: JobseekerProfileSuccessComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    JobseekerRegisterComponent,
    NavbarComponent,
    JobseekerRegisterSuccessComponent,
    JobseekerLoginComponent,
    JobseekerHomeComponent,
    JobseekerProfileComponent,
    JobseekerProfileSuccessComponent,
    JobseekerEducationComponent,
    JobseekerResumeComponent,
    JobseekerEmploymenthistoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
