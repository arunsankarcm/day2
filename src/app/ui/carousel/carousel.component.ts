// carousel.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],  // Required for ngFor and other common directives
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {
  carousel = [
    { id: 1, image: 'images/kerala.jpg' },
    { id: 2, image: 'images/kerala2.jpg' },
    { id: 3, image: 'images/kerala3.jpg' },
  ];
  currentIndex = 0;

  // Methods to control the carousel
  next() {
    this.currentIndex = (this.currentIndex + 1) % this.carousel.length;
  }

  previous() {
    this.currentIndex = (this.currentIndex - 1 + this.carousel.length) % this.carousel.length;
  }

  isActive(index: number): boolean {
    return this.currentIndex === index;
  }
}