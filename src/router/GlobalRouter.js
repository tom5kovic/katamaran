import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomeScreen } from '../screens/HomeScreen/HomeScreen';
import { Banner } from '../layout/Banner/Banner';
import { ToursScreen } from '../screens/ToursScreen/ToursScreen';

export const GlobalRouter = () => {
  return (
    <BrowserRouter>
      <Banner />
      <Routes>
        <Route path='/' index element={<HomeScreen />} />
        <Route path='/tours' element={<ToursScreen />} />
      </Routes>
    </BrowserRouter>
  );
};
