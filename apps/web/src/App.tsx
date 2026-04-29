import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import ExecutiveDashboard from './pages/ExecutiveDashboard';
import ZoneManagement from './pages/ZoneManagement';
import RecordManagement from './pages/RecordManagement';
import HealthCenter from './pages/HealthCenter';

function App() {
  return (
    <Router>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<ExecutiveDashboard />} />
          <Route path="/zones" element={<ZoneManagement />} />
          <Route path="/records" element={<RecordManagement />} />
          <Route path="/health" element={<HealthCenter />} />
        </Routes>
      </DashboardLayout>
    </Router>
  );
}

export default App;
