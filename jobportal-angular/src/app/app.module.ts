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

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'jobseeker/register', component: JobseekerRegisterComponent },
  { path: 'jobseeker/login', component: JobseekerLoginComponent },
  { path: 'jobseeker/home', component: JobseekerHomeComponent },

  {
    path: 'jobseeker/register/success',
    component: JobseekerRegisterSuccessComponent,
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
