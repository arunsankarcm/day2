import { Component, Input } from '@angular/core';
import { BootstrapCard } from '../../interface/bootsrap.interface';


@Component({
  selector: 'app-project-cards',
  standalone: true,
  imports: [],
  templateUrl: './project-cards.component.html',
  styleUrl: './project-cards.component.scss'
})
export class ProjectCardsComponent {
  @Input() data: BootstrapCard = {
    image: '',
    title: '',
    desc: '',
  };

}
