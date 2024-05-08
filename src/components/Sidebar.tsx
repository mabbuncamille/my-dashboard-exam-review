import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <div className="bg-[#7BAFE2] text-white w-64 min-h-screen flex flex-col items-center p-6">
      <div className="w-full flex flex-col mb-10">
        <div className="bg-blue-200 h-12 w-12 mb-3"></div>
        <div className="w-full">Dashboard</div>
      </div>
      <div className="w-full">
        <div className="mb-4 w-full">Category (45)</div>
        <div className="mb-4 w-full">Category (33)</div>
        <div className="mb-4 w-full">Category (n)</div>
        <div className="mb-4 w-full">Category (n)</div>
      </div>
    </div>
  );
};

export default Sidebar;
