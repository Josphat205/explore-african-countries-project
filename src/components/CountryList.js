import React from 'react';
import './CountryList.css';
import CountryComponent from './CountryComponent';
import ContinentCard from './ContinentCard';

function CountryList() {
  return (
    <>
      <div className="content">
        <ContinentCard />
      </div>
      <div className="contain">
        <CountryComponent />
      </div>
    </>
  );
}

export default CountryList;
