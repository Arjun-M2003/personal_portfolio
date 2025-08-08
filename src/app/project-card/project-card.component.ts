import { Component , Input} from '@angular/core';
import { project } from '../_models/project';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-project-card',
  imports: [CommonModule],
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})

export class ProjectCardComponent {
  @Input() project: project = {} as project;
  
}
