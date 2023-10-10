import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Banner } from '../layout/Banner/Banner';
import { TOURS, TOUR_DETAILS } from '../constants/Routes';
import { Home } from '../pages/Home/Home';
import { Tours } from '../pages/Tours/Tours';
import { TourDetails } from '../pages/TourDetails/TourDetails';

export const GlobalRouter = () => {
  return (
    <BrowserRouter>
      <Banner />
      <Routes>
        <Route path='/' index element={<Home />} />
        <Route path={TOURS} element={<Tours />} />
        <Route path={TOUR_DETAILS} element={<TourDetails />} />
      </Routes>
    </BrowserRouter>
  );
};
