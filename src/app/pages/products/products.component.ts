import { Component } from '@angular/core';
import { ApiService } from '../../api.service';
import { ProductCarouselComponent } from "../../ui/product-carousel/product-carousel.component";
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductCarouselComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  constructor(public api: ApiService) {}
  categories:[]=[];
  ngOnInit() {
    this.api.getCategory().subscribe((res: any) => {
      this.categories = res;
      console.log(this.categories);
    });
  }
}
