import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobseekerProfileSuccessComponent } from './jobseeker-profile-success.component';

describe('JobseekerProfileSuccessComponent', () => {
  let component: JobseekerProfileSuccessComponent;
  let fixture: ComponentFixture<JobseekerProfileSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobseekerProfileSuccessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobseekerProfileSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
