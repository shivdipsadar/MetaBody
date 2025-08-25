// components/Loader.jsx
import React from 'react';
import './Loader.css'; // We'll add styles here

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      <div className="loader"></div>
    </div>
  );
};

export default Loader;
