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

  public registerJobSeeker(jobSeeker: JobSeeker): Observable<JobSeeker> {}
}
