import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectCardComponent } from "../project-card/project-card.component";
import { project } from '../_models/project';
import { Tag } from '../_models/tag';
import { CommonModule } from '@angular/common';
import { ProjectsService } from '../_services/projects.service';

@Component({
  selector: 'app-projects',
  imports: [ProjectCardComponent, CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit {

  projects = {} as project[];

  constructor(private titleService: Title, private projectService: ProjectsService) {
    this.titleService.setTitle('My Portfolio - Projects');
  }
  ngOnInit(): void {
    this.projects = this.projectService.getProjects();
  }
}
