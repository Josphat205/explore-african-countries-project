import React from 'react';
import './ContinentCard.css';
import img from '../assets/africa.jpg';

function ContinentCard() {
  return (
    <div className="bg-grey p-6 shadow-lg contain flex justify-between items-center fill-slate-300">
      <h1 className="font-extrabold">AFRICAN COUNTRIES</h1>
      <img className="" src={img} alt="img" />
    </div>
  );
}

export default ContinentCard;
