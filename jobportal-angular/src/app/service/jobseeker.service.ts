import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JobSeeker } from '../jobSeeker';
import { Observable } from 'rxjs';
import { Education } from '../education';
import { EmploymentHistory } from '../employmentHistory';

@Injectable({
  providedIn: 'root',
})
export class JobseekerService {
  private apiServerUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  public registerJobSeeker(jobSeeker: JobSeeker): Observable<JobSeeker> {
    return this.http.post<JobSeeker>(
      `${this.apiServerUrl}/jobseeker/add`,
      jobSeeker
    );
  }

  public loginJobSeeker(
    email: string,
    password: string
  ): Observable<JobSeeker[]> {
    return this.http.get<JobSeeker[]>(
      `${this.apiServerUrl}/jobseeker/login/${email}/${password}`
    );
  }

  public checkUniqueEmail(email: string) {
    return this.http.get<JobSeeker[]>(
      `${this.apiServerUrl}/jobseeker/uniqueemail/${email}`
    );
  }

  public editJobSeeker(jobSeeker: JobSeeker): Observable<JobSeeker> {
    return this.http.put<JobSeeker>(
      `${this.apiServerUrl}/jobseeker/edit`,
      jobSeeker
    );
  }

  public addEducation(
    education: Education,
    jobSeekerId: number
  ): Observable<Education> {
    return this.http.put<Education>(
      `${this.apiServerUrl}/jobseeker/addeducation/${jobSeekerId}`,
      education
    );
  }

  public addEmploymentHistory(
    employmentHistory: EmploymentHistory,
    jobSeekerId: number
  ): Observable<EmploymentHistory> {
    return this.http.put<EmploymentHistory>(
      `${this.apiServerUrl}/jobseeker/addemploymenthistory/${jobSeekerId}`,
      employmentHistory
    );
  }

  public editEducation(education: Education): Observable<Education> {
    return this.http.put<Education>(
      `${this.apiServerUrl}/jobseeker/editeducation/${education.id}`,
      education
    );
  }

  public editEmploymentHistory(
    employmentHistory: EmploymentHistory
  ): Observable<EmploymentHistory> {
    return this.http.put<EmploymentHistory>(
      `${this.apiServerUrl}/jobseeker/editemploymenthistory/${employmentHistory.id}`,
      employmentHistory
    );
  }
}
