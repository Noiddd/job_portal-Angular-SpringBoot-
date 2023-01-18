import { Component, Input } from '@angular/core';
import { Skills } from 'src/app/skills';

@Component({
  selector: 'app-jobseeker-skills',
  templateUrl: './jobseeker-skills.component.html',
  styleUrls: ['./jobseeker-skills.component.css'],
})
export class JobseekerSkillsComponent {
  @Input() skill!: Skills;
}
