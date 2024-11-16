import { Component, Input } from '@angular/core';
import { BootstrapCard } from '../../interface/bootsrap.interface';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss',
})
export class CardsComponent {
  // @Input() description: string = 'description';
  // @Input() image: string = 'image';
  // @Input() title: string = 'title';

  @Input() data: BootstrapCard = {
    image: '',
    title: '',
    desc: '',
  };
}
