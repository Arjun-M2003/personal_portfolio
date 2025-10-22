import { CommonModule } from '@angular/common';
import { Component, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AccordionModule } from 'ngx-bootstrap/accordion';

@Component({
  selector: 'app-resume',
  imports: [AccordionModule, CommonModule],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {

  constructor(private titleService: Title, private renderer: Renderer2) {
    this.titleService.setTitle('My Portfolio - Resume');
  }

  downloadFile() {
    const link = this.renderer.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', '../../assets/Arjun_Resume_pg_da.pdf');
    link.setAttribute('download', 'Arjun_Resume_pg.pdf');
    link.click();
    link.remove();
  }
}
