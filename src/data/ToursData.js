import prva from '../assets/images/1.png';
import druga from '../assets/images/2.png';

export const toursData = [
  {
    id: 1,
    image: prva,
    name: 'Prva',
    location: 'Dunavac',
    duration: '2h ili 4h',
    price: '50 evra',
    numberOfPeopple: '12 osoba',
    description: 'Pored slike',
    descAboveGallery: 'Iznad galerije',
    galerija: [prva, druga]
  },
  {
    id: 2,
    image: druga,
    name: 'Druga',
    location: 'Koh Chang',
    duration: '5h',
    price: '20 evra',
    numberOfPeopple: '10 osoba',
    description: 'Pored slike 2',
    descAboveGallery: 'Iznad galerije 2',
    galerija: [druga, prva]
  }
];
