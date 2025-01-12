import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/pages/Home';
import ScanPage from './components/pages/ScanPage';
import SubscriptionsPage from './components/pages/SubscriptionsPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/scan" element={<ScanPage />} />
      <Route path="/subscriptions" element={<SubscriptionsPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes; 