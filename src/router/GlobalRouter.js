import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomeScreen } from '../screens/HomeScreen/HomeScreen';
import { Tours } from '../screens/Tours/Tours';
import { Banner } from '../layout/Banner/Banner';

export const GlobalRouter = () => {
  return (
    <BrowserRouter>
      <Banner />
      <Routes>
        <Route path='/' index element={<HomeScreen />} />
        <Route path='/tours' element={<Tours />} />
      </Routes>
    </BrowserRouter>
  );
};
