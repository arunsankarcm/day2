import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-button.component.html',
  styleUrl: './my-button.component.scss'
})
export class MyButtonComponent {
@Input() title:string='get my app'
@Input() color:string='black'
}
