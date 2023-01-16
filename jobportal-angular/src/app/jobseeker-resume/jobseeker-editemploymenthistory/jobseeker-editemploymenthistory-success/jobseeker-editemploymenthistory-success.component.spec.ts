import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobseekerEditemploymenthistorySuccessComponent } from './jobseeker-editemploymenthistory-success.component';

describe('JobseekerEditemploymenthistorySuccessComponent', () => {
  let component: JobseekerEditemploymenthistorySuccessComponent;
  let fixture: ComponentFixture<JobseekerEditemploymenthistorySuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobseekerEditemploymenthistorySuccessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobseekerEditemploymenthistorySuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
