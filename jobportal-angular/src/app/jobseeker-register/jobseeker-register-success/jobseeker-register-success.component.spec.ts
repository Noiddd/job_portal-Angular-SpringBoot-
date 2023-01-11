import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobseekerRegisterSuccessComponent } from './jobseeker-register-success.component';

describe('JobseekerRegisterSuccessComponent', () => {
  let component: JobseekerRegisterSuccessComponent;
  let fixture: ComponentFixture<JobseekerRegisterSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobseekerRegisterSuccessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobseekerRegisterSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
