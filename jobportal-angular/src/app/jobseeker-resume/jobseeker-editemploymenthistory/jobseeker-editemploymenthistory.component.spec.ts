import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobseekerEditemploymenthistoryComponent } from './jobseeker-editemploymenthistory.component';

describe('JobseekerEditemploymenthistoryComponent', () => {
  let component: JobseekerEditemploymenthistoryComponent;
  let fixture: ComponentFixture<JobseekerEditemploymenthistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobseekerEditemploymenthistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobseekerEditemploymenthistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
