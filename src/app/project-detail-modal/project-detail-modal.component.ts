import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { project } from '../_models/project';

@Component({
  selector: 'app-project-detail-modal',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule, MatIconModule],
  template: `
    <div class="modal-header">
      <h2 mat-dialog-title>{{data.name}}</h2>
      <button mat-icon-button mat-dialog-close>
        <mat-icon>close</mat-icon>
      </button>
    </div>

    <mat-dialog-content class="modal-content">
      <!-- Image Slideshow Section -->
      <div class="slideshow-container" *ngIf="data.pictures && data.pictures.length > 0">
        <div class="slide-wrapper">
          <img 
            [src]="data.pictures[currentSlide]" 
            [alt]="data.name + ' screenshot ' + (currentSlide + 1)"
            class="slide-image">
        </div>
        
        <!-- Navigation buttons -->
        <button 
          *ngIf="data.pictures.length > 1"
          class="slide-nav prev" 
          (click)="previousSlide()"
          [disabled]="currentSlide === 0">
          <mat-icon>chevron_left</mat-icon>
        </button>
        
        <button 
          *ngIf="data.pictures.length > 1"
          class="slide-nav next" 
          (click)="nextSlide()"
          [disabled]="currentSlide === data.pictures.length - 1">
          <mat-icon>chevron_right</mat-icon>
        </button>
        
        <!-- Slide indicators -->
        <div class="slide-indicators" *ngIf="data.pictures.length > 1">
          <button 
            *ngFor="let picture of data.pictures; let i = index"
            class="indicator"
            [class.active]="i === currentSlide"
            (click)="goToSlide(i)">
          </button>
        </div>
      </div>

      <!-- Placeholder when no images -->
      <div class="no-images" *ngIf="!data.pictures || data.pictures.length === 0">
        <mat-icon class="placeholder-icon">image</mat-icon>
        <p>No images available</p>
      </div>

      <!-- Project Description -->
      <div class="project-description">
        <h3>Description</h3>
        <p>{{data.description}}</p>
      </div>

      <!-- Tags Section -->
      <div class="project-tags">
        <h4>Technologies</h4>
        <div class="tags-container">
          <span 
            *ngFor="let tag of data.tags" 
            class="tag" 
            [style.background-color]="tag.color">
            {{tag}}
          </span>
        </div>
      </div>
    </mat-dialog-content>

    <mat-dialog-actions class="modal-actions">
      <a 
        [href]="data.projectUrl" 
        target="_blank" 
        mat-raised-button 
        color="primary"
        *ngIf="data.projectUrl">
        View Project
      </a>
      <button mat-button mat-dialog-close>Close</button>
    </mat-dialog-actions>
  `,
  styles: [`
    .modal-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px 24px 0;
      margin-bottom: 16px;
    }

    .modal-header h2 {
      margin: 0;
      color: #333;
    }

    .modal-content {
      padding: 0 24px;
      max-height: 70vh;
      overflow-y: auto;
    }

    .slideshow-container {
      position: relative;
      width: 100%;
      max-width: 600px;
      margin: 0 auto 24px;
      background: #f5f5f5;
      border-radius: 8px;
      overflow: hidden;
    }

    .slide-wrapper {
      width: 100%;
      height: 300px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .slide-image {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
      border-radius: 4px;
    }

    .slide-nav {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      background: rgba(0, 0, 0, 0.6);
      color: white;
      border: none;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: background 0.3s ease;
      z-index: 10;
    }

    .slide-nav:hover:not(:disabled) {
      background: rgba(0, 0, 0, 0.8);
    }

    .slide-nav:disabled {
      opacity: 0.3;
      cursor: not-allowed;
    }

    .slide-nav.prev {
      left: 10px;
    }

    .slide-nav.next {
      right: 10px;
    }

    .slide-indicators {
      display: flex;
      justify-content: center;
      padding: 16px;
      gap: 8px;
      background: rgba(0, 0, 0, 0.1);
    }

    .indicator {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      border: none;
      background: rgba(255, 255, 255, 0.6);
      cursor: pointer;
      transition: background 0.3s ease;
    }

    .indicator.active {
      background: #1976d2;
    }

    .indicator:hover {
      background: rgba(255, 255, 255, 0.9);
    }

    .no-images {
      text-align: center;
      padding: 40px 20px;
      color: #666;
      background: #f5f5f5;
      border-radius: 8px;
      margin-bottom: 24px;
    }

    .placeholder-icon {
      font-size: 48px;
      width: 48px;
      height: 48px;
      margin-bottom: 16px;
      opacity: 0.5;
    }

    .project-description {
      margin-bottom: 24px;
    }

    .project-description h3 {
      margin: 0 0 12px 0;
      color: #333;
      font-size: 1.2em;
    }

    .project-description p {
      line-height: 1.6;
      color: #666;
      margin: 0;
    }

    .project-tags h4 {
      margin: 0 0 12px 0;
      color: #333;
      font-size: 1.1em;
    }

    .tags-container {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }

    .tag {
      padding: 4px 12px;
      border-radius: 16px;
      color: white;
      font-size: 12px;
      font-weight: 500;
    }

    .modal-actions {
      padding: 16px 24px;
      display: flex;
      justify-content: flex-end;
      gap: 8px;
    }

    ::ng-deep .mat-mdc-dialog-container {
      max-width: 90vw;
      max-height: 90vh;
    }
  `]
})
export class ProjectDetailModalComponent {
  currentSlide = 0;

  constructor(
    public dialogRef: MatDialogRef<ProjectDetailModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: project
  ) {}

  nextSlide(): void {
    if (this.currentSlide < this.data.pictures.length - 1) {
      this.currentSlide++;
    }
  }

  previousSlide(): void {
    if (this.currentSlide > 0) {
      this.currentSlide--;
    }
  }

  goToSlide(index: number): void {
    this.currentSlide = index;
  }
}
