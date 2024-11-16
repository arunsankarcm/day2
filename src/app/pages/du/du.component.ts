import { Component } from '@angular/core';
import { BootstrapCard } from '../../interface/bootsrap.interface';
import { CardsComponent } from '../../ui/cards/cards.component';

@Component({
  selector: 'app-du',
  standalone: true,
  imports: [CardsComponent],
  templateUrl: './du.component.html',
  styleUrl: './du.component.scss'
})
export class DUComponent {
  cardCollection: BootstrapCard[] = [
    {
      title: 'DU1',
      image: 'images/trivandrum.jpg',
      desc: 'Thiruvananthapuram, the capital of Kerala, is known for its historic landmarks and beautiful beaches.',
    },
    {
      title: 'DU2',
      image: 'images/kollam.jpg',
      desc: 'Kollam, also known as Quilon, is a historic seaport and known for its cashew industry and backwaters.',
    },
    {
      title: 'DU3',
      image: 'images/ptm.jpg',
      desc: 'Pathanamthitta is known for its pilgrimage centers, including the famous Sabarimala temple.',
    },
    {
      title: 'DU4',
      image: 'images/alappy.jpg',
      desc: "Alappuzha, often called the 'Venice of the East', is famous for its backwaters and houseboat cruises.",
    },
    {
      title: 'DU5',
      image: 'images/ktm.jpg',
      desc: 'Kottayam is known for its lakes, literacy rate, and as a major hub for rubber plantations.',
    },
    {
      title: 'DU6',
      image: 'images/idukki.jpg',
      desc: 'Idukki is famous for its hill stations, wildlife sanctuaries, and the Idukki Dam.',
    },
    {
      title: 'Du7',
      image: 'images/er.png',
      desc: 'Ernakulam, known as Kochi, is the commercial capital of Kerala and features a mix of historical and modern attractions.',
    },
    {
      title: 'DU8',
      image: 'images/th.jpg',
      desc: 'Thrissur is known as the cultural capital of Kerala, famous for the Thrissur Pooram festival.',
    },
  ];
}
