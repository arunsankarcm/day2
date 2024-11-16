import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { ApiService } from '../../api.service';
import { ProductCardComponent } from "../product-card/product-card.component";
@Component({
  selector: 'app-product-carousel',
  standalone: true,
  imports: [CommonModule, CarouselModule, ProductCardComponent],
  templateUrl: './product-carousel.component.html',
  styleUrl: './product-carousel.component.scss',
})
export class ProductCarouselComponent {
  constructor(public api: ApiService) {}

  @Input() category: any = '';

  products: any = {
    id: 0,
    description: '',
    title: '',
    image: '',
  };
  ngOnInit() {
    this.api.getProductByCategory(this.category).subscribe((res: any) => {
      this.products = res;
    });
  }
  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
    },
    nav: true,
  };
}
