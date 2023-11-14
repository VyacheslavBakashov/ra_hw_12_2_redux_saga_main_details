import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import { ServiceDetailsPage } from './pages/ServiceDetailsPage';
import { ServicesPage } from './pages/ServicePage';

const App: FC = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<ServicesPage />} />
        <Route path="/:id/details" element={<ServiceDetailsPage />} />
      </Routes>
    </div>
  );
};

export default App;