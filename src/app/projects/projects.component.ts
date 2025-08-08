import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectCardComponent } from "../project-card/project-card.component";
import { project } from '../_models/project';
import { Tag } from '../_models/tag';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [ProjectCardComponent, CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  projects : project[] = [
    {id: 0, name: 'Food Tracking and Recommendaiton Web App', summary: 'Built a full-stack social media app using React, MongoDB Atlas, and Vercel for AI-powered meal tracking, logging, and personalized food recommendations.', description: 'Developed a full-stack social media web app for meal tracking and AI-driven food recommendations using React, MongoDB Atlas, Vercel, and Render. Implemented secure user authentication, RESTful APIs, and an optimized database schema to enable efficient meal logging, sharing, and personalized recommendations.', projectUrl: 'https://github.com/IanKarlmann/GrubGram', tags: [Tag.JAVASCRIPT, Tag.REACT, Tag.NODEJS, Tag.EXPRESS, Tag.MONGODB], pictures: []},
    {id: 1, name: 'AI Podcast Summarizer', summary: 'Built a full-stack AI podcast summarizer using React, Next.js, FastAPI, and OpenAI (Whisper & GPT-3.5), with Dockerized backend and AWS S3 media storage.', description: 'Implemented and integrated AI/ML models into full-stack applications to power intelligent features such as text summarization, recommendation systems, and data-driven insights. Experience includes working with OpenAI APIs, Whisper for audio transcription, and deploying scalable inference backends using FastAPI and Docker.', projectUrl: 'https://github.com/Arjun-M2003/podcast_sum', tags: [Tag.TYPESCRIPT, Tag.REACT, Tag.DOCKER, Tag.AWS, Tag.FASTAPI, Tag.AI], pictures: []},
    {id: 2, name: 'Package Recommendation Project', summary: 'Built a Node.js backend with REST and GraphQL APIs to serve AI-generated quality metrics for open-source packages, using TypeScript and AWS S3 for scalable metadata handling.', description: 'Built a scalable system using TypeScript and Node.js to evaluate open-source package quality through custom metrics like commit responsiveness. Exposed dynamic data via REST and GraphQL APIs with metadata stored in AWS S3, enabling real-time quality scoring for frontend use.', projectUrl: 'https://github.com/kevastator/trustworthy-module-registry', tags: [Tag.TYPESCRIPT, Tag.AWS, Tag.NODEJS, Tag.GRAPHQL], pictures: []},
  ];

  constructor(private titleService: Title) {
    this.titleService.setTitle('My Portfolio - Projects');
  }
}
