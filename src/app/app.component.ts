import { Component } from '@angular/core';
import { MyButtonComponent } from "./ui/my-button/my-button.component";
import { HomepageComponent } from "./pages/homepage/homepage.component";
import { CarouselComponent } from "./ui/carousel/carousel.component";
import { CardsComponent } from "./ui/cards/cards.component";
import { CardCollectionComponent } from "./ui/card-collection/card-collection.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MyButtonComponent, HomepageComponent, CarouselComponent, CardsComponent, CardCollectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
