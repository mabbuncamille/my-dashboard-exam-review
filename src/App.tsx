import React from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './features/Dashboard';

const App: React.FC = () => {
  return (
    <div className="flex">
      <Sidebar />
      <Dashboard />
    </div>
  );
};

export default App;
