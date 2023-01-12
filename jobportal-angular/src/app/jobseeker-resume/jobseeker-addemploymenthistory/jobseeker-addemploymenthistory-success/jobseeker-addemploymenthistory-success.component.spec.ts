import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobseekerAddemploymenthistorySuccessComponent } from './jobseeker-addemploymenthistory-success.component';

describe('JobseekerAddemploymenthistorySuccessComponent', () => {
  let component: JobseekerAddemploymenthistorySuccessComponent;
  let fixture: ComponentFixture<JobseekerAddemploymenthistorySuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobseekerAddemploymenthistorySuccessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobseekerAddemploymenthistorySuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
