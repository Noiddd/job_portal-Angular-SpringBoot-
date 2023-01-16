import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobseekerDeleteeducationSuccessComponent } from './jobseeker-deleteeducation-success.component';

describe('JobseekerDeleteeducationSuccessComponent', () => {
  let component: JobseekerDeleteeducationSuccessComponent;
  let fixture: ComponentFixture<JobseekerDeleteeducationSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobseekerDeleteeducationSuccessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobseekerDeleteeducationSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
