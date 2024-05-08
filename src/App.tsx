import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './features/Dashboard';
import DetailPage from './features/DetailPage';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/detail" element={<DetailPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
