import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCountry } from '../redux/country/country';
import Loader from './Loader';

function CountryDetails() {
  const dispatch = useDispatch();
  const { username } = useParams();
  useEffect(() => {
    dispatch(fetchCountry(username));
  }, []);
  const data = useSelector((state) => state.data.countries);
  const data2 = useSelector((state) => state.data);
  const { loading } = data2;
  const {
    flags, capital, area, subregion, name, population, languages, status, timezones, region, unMember, startOfWeek, landlocked,
  } = data[0];
  return (
    <div data-testid="countryDetails check">
      {
      loading === true
        ? <Loader />
        : (

          <div className="pt-6 pb-12 bg-grey-300 mx-1">
            <div id="card" className="bg-cerise-500 mb-2">
              <div className="title-div w-100 h-full p-7 m-0">
                <h2 className="text-center font-serif text-white  uppercase text-4xl xl:text-5xl  font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-pink-800">{region}</h2>
              </div>
              <div className="container w-100 lg:w-4/5 mx-auto flex flex-col">
                <div
                  v-for="card in cards"
                  className="flex flex-col md:flex-row overflow-hidden
                                      bg-cerise shadow-xl  mt-2 w-100 mx-1"
                >
                  <div className="h-64 w-auto md:w-1/2">
                    <img className="inset-0 h-full w-full object-cover object-center" src={flags ? flags.png : null} alt={name.common} />
                  </div>
                  <div className="w-full py-4 px-6 text-white-800 flex flex-col justify-between">
                    <h3 className="font-semibold text-lg leading-tight text-white truncate justify-between flex align-center font-bold">
                      <span>
                        {' '}
                        <strong style={{ marginRight: '5px' }}>Country:</strong>
                        {name.common}
                      </span>
                      {' '}
                      <span>
                        {' '}
                        <strong style={{ marginRight: '5px' }}>City:</strong>
                        {capital}
                      </span>
                    </h3>
                    <p className="mt-2">
                      <strong style={{ marginRight: '5px' }}>Status:</strong>
                      {status}
                    </p>
                    <p className="mt-2">
                      <strong style={{ marginRight: '5px' }}>SubRegion:</strong>
                      {subregion}
                    </p>
                    <p className="text-sm text-white uppercase tracking-wide font-semibold mt-2 justify-between flex align-center">
                      <span>
                        <strong style={{ marginRight: '5px' }}>Area(M2):</strong>
                        {area}
                      </span>
                      <span>
                        <strong style={{ marginRight: '5px' }}>Population:</strong>
                        {population}
                      </span>
                    </p>
                    <p className="mt-2">
                      <strong style={{ marginRight: '5px' }}>TimeZone:</strong>
                      {timezones}
                    </p>
                    <div className="language justify-between flex align-center">
                      <p className="mt-2">
                        <strong style={{ marginRight: '5px' }}>language:</strong>
                        {languages.eng}
                      </p>
                      <p className="mt-2">
                        <strong style={{ marginRight: '5px' }}>UN Member:</strong>
                        {unMember ? 'YES' : 'NO'}
                      </p>
                    </div>
                    <div className="justify-between text-white flex align-center relative">
                      <p className="mt-2">
                        <strong style={{ marginRight: '5px' }}>startOfWeek:</strong>
                        {startOfWeek}
                      </p>
                      <p className="mt-2">
                        <strong style={{ marginRight: '5px' }}>LandLocked:</strong>
                        {landlocked ? 'YES' : 'NO'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
    }

    </div>
  );
}

export default CountryDetails;
