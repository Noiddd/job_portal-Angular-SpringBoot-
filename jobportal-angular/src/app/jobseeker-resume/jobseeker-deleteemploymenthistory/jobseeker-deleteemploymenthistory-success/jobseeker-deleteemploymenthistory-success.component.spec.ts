import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobseekerDeleteemploymenthistorySuccessComponent } from './jobseeker-deleteemploymenthistory-success.component';

describe('JobseekerDeleteemploymenthistorySuccessComponent', () => {
  let component: JobseekerDeleteemploymenthistorySuccessComponent;
  let fixture: ComponentFixture<JobseekerDeleteemploymenthistorySuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobseekerDeleteemploymenthistorySuccessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobseekerDeleteemploymenthistorySuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
