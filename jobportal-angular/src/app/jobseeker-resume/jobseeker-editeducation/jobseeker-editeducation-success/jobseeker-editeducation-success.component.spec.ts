import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobseekerEditeducationSuccessComponent } from './jobseeker-editeducation-success.component';

describe('JobseekerEditeducationSuccessComponent', () => {
  let component: JobseekerEditeducationSuccessComponent;
  let fixture: ComponentFixture<JobseekerEditeducationSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobseekerEditeducationSuccessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobseekerEditeducationSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
