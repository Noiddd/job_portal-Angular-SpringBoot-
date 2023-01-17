import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobseekerDeleteemploymenthistoryComponent } from './jobseeker-deleteemploymenthistory.component';

describe('JobseekerDeleteemploymenthistoryComponent', () => {
  let component: JobseekerDeleteemploymenthistoryComponent;
  let fixture: ComponentFixture<JobseekerDeleteemploymenthistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobseekerDeleteemploymenthistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobseekerDeleteemploymenthistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
