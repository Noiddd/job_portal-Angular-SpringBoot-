import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobseekerEditeducationComponent } from './jobseeker-editeducation.component';

describe('JobseekerEditeducationComponent', () => {
  let component: JobseekerEditeducationComponent;
  let fixture: ComponentFixture<JobseekerEditeducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobseekerEditeducationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobseekerEditeducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
