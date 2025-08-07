import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectCardComponent } from "../project-card/project-card.component";
import { project } from '../_models/project';
import { Tag } from '../_models/tag';

@Component({
  selector: 'app-projects',
  imports: [ProjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  project : project = {
    id: 0,
    name: 'Food Tracking and Recommendaiton Web App',
    summary: 'test description',
    description: '',
    projectUrl: '',
    tags: [Tag.JAVASCRIPT, Tag.REACT, Tag.NODEJS, Tag.EXPRESS, Tag.MONGODB],
    pictures: []
  }

  constructor(private titleService: Title) {
    this.titleService.setTitle('My Portfolio - Projects');
  }
}
