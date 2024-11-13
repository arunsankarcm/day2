import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss',
})
export class CardsComponent {
  @Input() description: string = 'description';
  @Input() image: string = 'image';
  @Input() title: string = 'title';
}
