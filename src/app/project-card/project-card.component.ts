import { Component , Input} from '@angular/core';
import { project } from '../_models/project';
import { CommonModule } from '@angular/common';
import { BsModalRef, BsModalService, ModalModule } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-project-card',
  imports: [CommonModule, ModalModule],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {
  @Input() project = {} as project;
  bsModualRef?: BsModalRef;
  
  constructor(private modalService: BsModalService) { 
  }

  openProjectModal(){
    this.bsModualRef = this.modalService.show('');
  }
}
