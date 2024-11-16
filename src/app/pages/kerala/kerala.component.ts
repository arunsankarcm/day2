import { Component } from '@angular/core';
import { CardCollectionComponent } from "../../ui/card-collection/card-collection.component";
import { CarouselComponent } from "../../ui/carousel/carousel.component";

@Component({
  selector: 'app-kerala',
  standalone: true,
  imports: [CardCollectionComponent, CarouselComponent],
  templateUrl: './kerala.component.html',
  styleUrl: './kerala.component.scss'
})
export class KeralaComponent {

}
