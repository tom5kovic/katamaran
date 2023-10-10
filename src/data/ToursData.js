import prva from '../assets/images/1.png';
import druga from '../assets/images/2.png';
import { useTranslation } from 'react-i18next';

export const ToursData = () => {
  const { t } = useTranslation();
  return [
    {
      id: 1,
      image: prva,
      name: 'Prva',
      location: t('contact'),
      duration: '2h ili 4h',
      price: '50 evra',
      numberOfPeopple: '12 osoba',
      description: 'Pored slike',
      descAboveGallery: 'Iznad galerije',
      gallery: [prva, druga, druga, prva, druga, druga]
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
      gallery: [druga, prva]
    }
  ];
};
