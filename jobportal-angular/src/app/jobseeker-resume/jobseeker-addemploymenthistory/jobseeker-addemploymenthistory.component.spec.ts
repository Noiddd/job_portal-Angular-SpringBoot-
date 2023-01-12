import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobseekerAddemploymenthistoryComponent } from './jobseeker-addemploymenthistory.component';

describe('JobseekerAddemploymenthistoryComponent', () => {
  let component: JobseekerAddemploymenthistoryComponent;
  let fixture: ComponentFixture<JobseekerAddemploymenthistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobseekerAddemploymenthistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobseekerAddemploymenthistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
