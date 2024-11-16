import { Component, Input } from '@angular/core';
import { ProductCard } from '../../interface/bootsrap.interface';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  @Input() data: ProductCard = {
    image: '',
    title: '',
    description: '',
    category: ''
  };

}


