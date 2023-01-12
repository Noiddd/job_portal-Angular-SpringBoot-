import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobseekerEmploymenthistoryComponent } from './jobseeker-employmenthistory.component';

describe('JobseekerEmploymenthistoryComponent', () => {
  let component: JobseekerEmploymenthistoryComponent;
  let fixture: ComponentFixture<JobseekerEmploymenthistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobseekerEmploymenthistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobseekerEmploymenthistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
