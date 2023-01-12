import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobseekerAddeducationComponent } from './jobseeker-addeducation.component';

describe('JobseekerAddeducationComponent', () => {
  let component: JobseekerAddeducationComponent;
  let fixture: ComponentFixture<JobseekerAddeducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobseekerAddeducationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobseekerAddeducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
