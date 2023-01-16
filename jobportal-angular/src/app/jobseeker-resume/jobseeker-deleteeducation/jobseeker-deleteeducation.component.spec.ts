import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobseekerDeleteeducationComponent } from './jobseeker-deleteeducation.component';

describe('JobseekerDeleteeducationComponent', () => {
  let component: JobseekerDeleteeducationComponent;
  let fixture: ComponentFixture<JobseekerDeleteeducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobseekerDeleteeducationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobseekerDeleteeducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
