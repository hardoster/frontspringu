// TestBanner.jsx
import React from 'react';
import testImage from '../assets/bannerexampleusam.png';

export default function TestBanner() {
  return (
    <div>
      <img src={testImage} alt="Test" className="w-full" />
     
    </div>
  );
}