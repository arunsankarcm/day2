import { Component } from '@angular/core';
import { BootstrapCard } from '../../interface/bootsrap.interface';
import { ProjectCardsComponent } from '../project-cards/project-cards.component';

@Component({
  selector: 'app-project-card-collection',
  standalone: true,
  imports: [ProjectCardsComponent],
  templateUrl: './project-card-collection.component.html',
  styleUrl: './project-card-collection.component.scss'
})
export class ProjectCardCollectionComponent {

  projectCardCollection: BootstrapCard[] = [
    {
      title: 'Wheres Waldo',
      image: 'images/Wheres Waldo.png',
      desc: 'Game to find Waldo',
    },
    {
      title: 'E-Commerce',
      image: 'images/E-Com.jpg',
      desc: 'An online store built with modern web technologies.',
    },
    {
      title: 'Blog',
      image: 'images/Blog.png',
      desc: 'A platform to share articles and insights',
    },
  ];
}

