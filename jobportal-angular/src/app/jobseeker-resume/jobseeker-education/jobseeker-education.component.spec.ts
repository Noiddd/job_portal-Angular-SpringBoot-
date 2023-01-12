import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobseekerEducationComponent } from './jobseeker-education.component';

describe('JobseekerEducationComponent', () => {
  let component: JobseekerEducationComponent;
  let fixture: ComponentFixture<JobseekerEducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobseekerEducationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobseekerEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
