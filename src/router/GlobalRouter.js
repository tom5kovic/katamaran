import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomeScreen } from '../screens/HomeScreen/HomeScreen';
import { Banner } from '../layout/Banner/Banner';
import { ToursScreen } from '../screens/ToursScreen/ToursScreen';
import { TourDetailsScreen } from '../screens/TourDetailsScreen/TourDetailsScreen';
import { TOURS, TOUR_DETAILS } from '../constants/Routes';

export const GlobalRouter = () => {
  return (
    <BrowserRouter>
      <Banner />
      <Routes>
        <Route path='/' index element={<HomeScreen />} />
        <Route path={TOURS} element={<ToursScreen />} />
        <Route path={TOUR_DETAILS} element={<TourDetailsScreen />} />
      </Routes>
    </BrowserRouter>
  );
};
