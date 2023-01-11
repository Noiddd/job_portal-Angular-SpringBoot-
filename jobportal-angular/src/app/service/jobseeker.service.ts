import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JobSeeker } from '../jobSeeker';
import { Observable } from 'rxjs';

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
}
