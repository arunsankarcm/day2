import { Component } from '@angular/core';
import { CardsComponent } from '../cards/cards.component';
import { BootstrapCard } from '../../interface/bootsrap.interface';

@Component({
  selector: 'app-card-collection',
  standalone: true,
  imports: [CardsComponent],
  templateUrl: './card-collection.component.html',
  styleUrl: './card-collection.component.scss',
})
export class CardCollectionComponent {
  cardCollection: BootstrapCard[] = [
    {
      title: 'Thiruvananthapuram',
      image: 'images/trivandrum.jpg',
      desc: 'Thiruvananthapuram, the capital of Kerala, is known for its historic landmarks and beautiful beaches.',
    },
    {
      title: 'Kollam',
      image: 'images/kollam.jpg',
      desc: 'Kollam, also known as Quilon, is a historic seaport and known for its cashew industry and backwaters.',
    },
    {
      title: 'Pathanamthitta',
      image: 'images/ptm.jpg',
      desc: 'Pathanamthitta is known for its pilgrimage centers, including the famous Sabarimala temple.',
    },
    {
      title: 'Alappuzha',
      image: 'images/alappy.jpg',
      desc: "Alappuzha, often called the 'Venice of the East', is famous for its backwaters and houseboat cruises.",
    },
    {
      title: 'Kottayam',
      image: 'images/ktm.jpg',
      desc: 'Kottayam is known for its lakes, literacy rate, and as a major hub for rubber plantations.',
    },
    {
      title: 'Idukki',
      image: 'images/idukki.jpg',
      desc: 'Idukki is famous for its hill stations, wildlife sanctuaries, and the Idukki Dam.',
    },
    {
      title: 'Ernakulam',
      image: 'images/er.png',
      desc: 'Ernakulam, known as Kochi, is the commercial capital of Kerala and features a mix of historical and modern attractions.',
    },
    {
      title: 'Thrissur',
      image: 'images/th.jpg',
      desc: 'Thrissur is known as the cultural capital of Kerala, famous for the Thrissur Pooram festival.',
    },
    {
      title: 'Palakkad',
      image: 'images/palakkad.jpg',
      desc: 'Palakkad is known for its lush landscapes, paddy fields, and the historic Palakkad Fort.',
    },
    {
      title: 'Malappuram',
      image: 'images/mlp.jpg',
      desc: 'Malappuram is known for its cultural heritage, religious harmony, and beautiful scenery.',
    },
    {
      title: 'Kozhikode',
      image: 'images/kzdd.jpg',
      desc: 'Kozhikode, formerly known as Calicut, is famous for its historic spice trade and beaches.',
    },
    {
      title: 'Wayanad',
      image: 'images/waynd.jpg',
      desc: 'Wayanad is known for its hills, wildlife, and lush forests, with headquarters at Kalpetta.',
    },
    {
      title: 'Kannur',
      image: 'images/kannur.png',
      desc: 'Kannur, historically known as Cannanore, is famous for its forts, temples, and beautiful coastline.',
    },
    {
      title: 'Kasaragod',
      image: 'images/ksr.jpg',
      desc: 'Kasaragod is known for its rich heritage, Bekal Fort, and scenic backwaters.',
    },
  ];
}
