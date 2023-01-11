import { Injectable } from '@angular/core';
import { JobSeeker } from '../jobSeeker';

@Injectable({
  providedIn: 'root',
})
export class JobSeekerDataService {
  public currentJobSeeker?: JobSeeker;
  public loggedIn: boolean = false;

  constructor() {}
}
