import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobseekerAddeducationSuccessComponent } from './jobseeker-addeducation-success.component';

describe('JobseekerAddeducationSuccessComponent', () => {
  let component: JobseekerAddeducationSuccessComponent;
  let fixture: ComponentFixture<JobseekerAddeducationSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobseekerAddeducationSuccessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobseekerAddeducationSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
