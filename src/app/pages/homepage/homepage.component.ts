import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardCollectionComponent } from '../../ui/project-card-collection/project-card-collection.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule, ProjectCardCollectionComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
})
export class HomepageComponent {

}
