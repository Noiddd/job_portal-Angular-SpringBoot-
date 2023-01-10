import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { JobseekerRegisterComponent } from './jobseeker-register/jobseeker-register.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'jobseeker/register', component: JobseekerRegisterComponent },
];

@NgModule({
  declarations: [AppComponent, JobseekerRegisterComponent],
  imports: [BrowserModule, AppRoutingModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
