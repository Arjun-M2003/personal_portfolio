import { Component , Input} from '@angular/core';
import { project } from '../_models/project';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { ProjectDetailModalComponent } from '../project-detail-modal/project-detail-modal.component';


@Component({
  selector: 'app-project-card',
  imports: [CommonModule],
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})

export class ProjectCardComponent {
  @Input() project: project = {} as project;

  constructor(private dialog: MatDialog) {}

  openProjectModal(): void {
    this.dialog.open(ProjectDetailModalComponent, {
      width: '800px',
      maxWidth: '90vw',
      data: this.project
    });
  }

}
