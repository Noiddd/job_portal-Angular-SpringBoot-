import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobseekerSkillsComponent } from './jobseeker-skills.component';

describe('JobseekerSkillsComponent', () => {
  let component: JobseekerSkillsComponent;
  let fixture: ComponentFixture<JobseekerSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobseekerSkillsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobseekerSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
